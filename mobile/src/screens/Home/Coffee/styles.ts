import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
   width: 100%;
   background-color: ${({ theme }) => theme.colors.shape};
   height: 100px;
   border-top-left-radius: 6px;
   border-top-right-radius: 36px;
   border-bottom-left-radius: 36px;
   border-bottom-right-radius: 6px;
   margin-bottom: 12px;
   flex-direction: row;
   align-items: center;
   padding: 4px 8px;
`;

export const CoffeeImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const CoffeeInfoWrapper = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const CoffeeName = styled.Text`
  margin-bottom: 2px;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.baloo.bold};
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const CoffeeDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
  color: ${({ theme }) => theme.colors.label};
`;
