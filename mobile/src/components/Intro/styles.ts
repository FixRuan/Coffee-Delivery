import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
   background-color: ${({ theme }) => theme.colors.background};
   padding: 12px 16px;
`;

export const FindCoffee = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const FindCoffeeTexts = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.baloo.extraBold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${RFValue(15)}px;
  line-height: 24px;
`;

export const Details = styled(FlatList)`
  margin-top: 24px;
`;
