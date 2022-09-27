import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components/native";
import { Header } from "../../components/Header/Header";
import { Intro } from "../../components/Intro/Intro";

import {
  Container,
} from "./styles";

export function Home() {
  const { colors } = useTheme();

  return (
    <Container>
      <StatusBar translucent={false} style="light" backgroundColor={colors["brand-purple-dark"]} />
      <Header />
      <Intro />
    </Container>
  );
}
