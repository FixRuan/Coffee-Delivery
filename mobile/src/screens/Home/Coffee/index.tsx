import React from "react";

import {
  Container,
  CoffeeImage,
} from "./styles";

import coffeImg from "../../../assets/coffees/americano.png";

export function Coffee() {
  return (
    <Container>
      <CoffeeImage source={coffeImg} />
    </Container>
  );
}
