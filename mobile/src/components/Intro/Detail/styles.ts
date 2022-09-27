import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
  bgColor: string;
}

export const Container = styled.View<Props>`
   height: 40px;
   width: 50%;
   background-color: ${({ bgColor }) => bgColor};
   border: 2px solid ${({ theme }) => theme.colors.white};
   flex-direction: row;
   align-items: center;
   border-radius: 8px;
   padding: 0px 6px;
`;

export const DetailTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 4px;
`;
