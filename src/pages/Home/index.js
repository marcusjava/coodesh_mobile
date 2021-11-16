import React from "react";
import ListItems from "../../components/ListItems";
import Search from "../../components/Search";

import { Container, Title, Image } from "./styles";

const Home = () => {
  return (
    <Container>
      <Image
        source={require("../../assets/pharma.png")}
        accessibilityRole="image"
      />
      <Search />
      <ListItems />
    </Container>
  );
};

export default Home;
