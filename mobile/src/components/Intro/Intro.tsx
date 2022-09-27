import React from "react";

import {
  Container,
  FindCoffee,
  FindCoffeeTexts,
  Title,
  About,
} from "./styles";

import IntroSvg from "../../assets/Intro-img.svg";

import { Detail } from "./Detail/Detail";
import { FlatList } from "react-native";
import { details } from "../../utils/DetailsData";

export function Intro() {
  return (
    <Container>
      <FindCoffee>
        <FindCoffeeTexts>
          <Title>Encontre o café perfeito para{"\n"}qualquer hora do dia</Title>
          <About>Com o Coffee Delivery você recebe seu{"\n"}café onde estiver, a qualquer hora</About>
        </FindCoffeeTexts>

        <IntroSvg />
      </FindCoffee>

      <FlatList
        data={details}
        numColumns={2}
        contentContainerStyle={{ marginTop: 24 }}
        renderItem={
          ({ item }) =>
            <Detail
              key={item.id}
              DetailData={item}
            />
        }
      />
    </Container>
  );
}
