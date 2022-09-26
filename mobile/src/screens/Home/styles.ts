import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors["brand-purple-dark"]};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.baloo.bold};
  color: ${({ theme }) => theme.colors["brand-yellow-light"]};
  font-size: 32px;
`;
