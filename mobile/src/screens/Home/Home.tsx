import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components/native";
import { Header } from "../../components/Header/Header";

import {
  Container,
  Title,
} from "./styles";

export function Home() {
  const { colors } = useTheme();

  return (
    <Container>
      <StatusBar translucent={false} style="light" backgroundColor={colors["brand-purple-dark"]} />
      <Header />
    </Container>
  );
}
