import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";

import {
  Container,
  Title,
} from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar translucent={false} style="dark" backgroundColor="#fff" />
      <Title>Hello World</Title>
    </Container>
  );
}
