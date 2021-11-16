import React from "react";

import { Container, Image } from "./styles/splash";

const Splash = () => {
  return (
    <Container testID="splash">
      <Image source={require("../../assets/pharma.png")} />
    </Container>
  );
};

export default Splash;
