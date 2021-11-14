import axios from "axios";
import dayjs from "dayjs";

export const api = axios.create({ baseURL: "https://randomuser.me/api" });

export const getPacientsFromAPI = async ({ page, numberOfItems }) => {
  const response = await api.get("/", {
    params: { results: numberOfItems, page: page },
  });

  const { info, results } = response.data;

  return {
    data: results.map((item) => ({
      id: item.login.uuid,
      picture: item.picture.large,
      name: `${item.name.first} ${item.name.last}`,
      phone: item.phone,
      gender: item.gender === "male" ? "Masculino" : "Feminino",
      email: item.email,
      dob: dayjs(item.dob.date).format("DD/MM/YYYY"),
      location: `${item.location.street.name} ${item.location.street.number}, ${item.location.city}-${item.location.country}`,
      nat: item.nat,
    })),
    actualPage: info.page,
    perPage: info.results,
  };
};
