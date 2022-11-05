import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
`;

export const CoffeesContainer = styled.View`
  padding: 0 24px;
  margin-top: 12px;
`;

export const CoffeesTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.baloo.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.subtitle};
`;
