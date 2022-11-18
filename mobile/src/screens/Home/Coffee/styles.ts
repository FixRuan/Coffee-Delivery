import styled from "styled-components/native";

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
