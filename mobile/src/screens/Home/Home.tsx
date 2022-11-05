import React, { useEffect } from "react";
import { BackHandler } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";

import { Header } from "../../components/Header/Header";
import { Intro } from "../../components/Intro/Intro";
import { Coffee } from "./Coffee";

import {
  Container,
  CoffeesContainer,
  CoffeesTitle
} from "./styles";

export function Home() {
  const { colors } = useTheme();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
    return () => backHandler.remove();
  }, []);

  return (
    <>

      <StatusBar translucent={false} style="light" backgroundColor={colors["brand-purple-dark"]} />
      <Container>
        <Header />
        <Intro />

        <CoffeesContainer>
          <CoffeesTitle>Nossos cafés</CoffeesTitle>

          <Coffee />
          <Coffee />
        </CoffeesContainer>

      </Container>
    </>
  );
}
