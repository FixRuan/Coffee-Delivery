import React from "react";

import {
  Container,
  CoffeeImage,
  CoffeeInfoWrapper,
  CoffeeName,
  CoffeeDescription,
} from "./styles";

import coffeImg from "../../../assets/coffees/americano.png";

export function Coffee() {
  return (
    <Container>
      <CoffeeImage source={coffeImg} />

      <CoffeeInfoWrapper>
        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>
      </CoffeeInfoWrapper>
    </Container>
  );
}
