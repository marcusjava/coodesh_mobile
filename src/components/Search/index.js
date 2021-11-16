import React, { useState } from "react";
import { Container, Button, InputContainer, Input } from "./styles/search";
import { MaterialIcons } from "@expo/vector-icons";
import { usePacient } from "../../context/pacient";

const Search = () => {
  const [search, setSearch] = useState("");

  const { searchPacients } = usePacient();

  const handleSearch = () => {
    searchPacients(search);
  };
  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Searching"
          placeholderTextColor="#CFD7DD"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <MaterialIcons
          name="person-search"
          color="#7F8E9C"
          size={35}
          style={{ position: "absolute", right: 10 }}
        />
      </InputContainer>
      <Button
        onPress={handleSearch}
        accessibilityLabel="search"
        testID="search-button"
      >
        <MaterialIcons name="filter-alt" size={50} color="#4B5C6B" />
      </Button>
    </Container>
  );
};

export default Search;
