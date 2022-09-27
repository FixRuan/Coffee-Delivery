import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
   width: 100%;
   height: ${RFPercentage(15)}px;
   background-color: ${({ theme }) => theme.colors["brand-purple-dark"]};
   padding: 12px 16px;
   align-items: center;
   justify-content: space-between;
   flex-direction: row;
`;

export const Location = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors["brand-purple-light"]};
  margin-left: 6px;
`;
