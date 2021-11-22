import React, { useEffect, useState, useContext } from "react";
import { getPacientsFromAPI } from "../services/api";
import Fuse from "fuse.js";
import Splash from "../components/Splash";
import { ActivityIndicator } from "react-native";

//exportando ṕara ser utilizado nos testes
export const PacientContext = React.createContext();

export const usePacient = () => {
  const context = useContext(PacientContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }
  return context;
};

export const PacientProvider = ({ children }) => {
  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");

  const getPacients = async () => {
    setLoading(true);
    const { data, actualPage } = await getPacientsFromAPI({
      page: page,
      numberOfItems: 10,
    });
    setPacients(data);
    setPage(actualPage);
    setLoading(false);
  };

  useEffect(() => {
    getPacients();
  }, []);

  const searchPacients = (term) => {
    if (!term) {
      setSearch("");
      return;
    }
    const fuse = new Fuse(pacients, {
      keys: ["name", "nat", "gender"],
      includeScore: true,
    });

    const results = fuse.search(term).map((search) => search.item);
    setSearch(results);
  };

  const sortPacientNames = () => {
    if (sort === "asc") {
      setSort("desc");
      return pacients.sort((a, b) => a.name < b.name);
    }

    if (sort === "desc") {
      setSort("asc");
      return pacients.sort((a, b) => a.name > b.name);
    }
  };

  const loadMore = async () => {
    if (search.length > 0) return;

    console.log("loading more");

    setPage(page + 1);
    const { data, actualPage } = await getPacientsFromAPI({
      page: page,
      numberOfItems: 10,
    });
    setPacients((oldData) => [...oldData, ...data]);
    setPage(actualPage);
  };

  if (loading) {
    return <Splash />;
  }

  return (
    <PacientContext.Provider
      value={{
        searchPacients,
        sortPacientNames,
        pacients,
        loading,
        searchPacients,
        search,
        loadMore,
        pacient,
        setPacient,
      }}
    >
      {children}
    </PacientContext.Provider>
  );
};
