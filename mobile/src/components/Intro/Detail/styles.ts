import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
  bgColor: string;
}

export const Container = styled.View<Props>`
   height: 40px;
   width: 100%;
   background-color: ${({ bgColor }) => bgColor};
   border: 2px solid ${({ theme }) => theme.colors.white};
   flex-direction: row;
   align-items: center;
   border-radius: 8px;
   padding: 0px 6px;
   margin-bottom: 4px;
`;

export const DetailTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 6px;
`;
