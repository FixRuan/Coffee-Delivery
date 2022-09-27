import React from "react";

import {
  Container, DetailTitle
} from "./styles";

interface Props {
  title: string;
  icon: unknown;
  color: string;
}

interface DetailProps {
  DetailData: Props;
}

export function Detail({ DetailData }: DetailProps) {
  return (
    <Container bgColor={DetailData.color}>
      <>
        {DetailData.icon}
      </>
      <DetailTitle>Compra simples e segura</DetailTitle>
    </Container>
  );
}
