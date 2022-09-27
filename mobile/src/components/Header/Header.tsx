import React from "react";
import { MapPin } from "phosphor-react-native";

import {
  Container,
  Location,
  LocationName,
} from "./styles";

import LogoSvg from "../../assets/Logo.svg";
import { useTheme } from "styled-components/native";

export function Header() {
  const { colors } = useTheme();

  return (
    <Container>
      <LogoSvg />

      <Location>
        <MapPin color={colors["brand-purple-light"]} weight="fill" size={24} />
        <LocationName>Goioerê, PR</LocationName>
      </Location>
    </Container>
  );
}
