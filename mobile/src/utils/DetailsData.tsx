import React from "react";
import { ShoppingCart, Package, Clock, Coffee } from "phosphor-react-native";

interface detailsProps {
  id: number;
  title: string;
  icon: unknown;
  color: string;
}

export const details: detailsProps[] = [
  {
    id: 1,
    icon: <ShoppingCart color="#fff" size={20} weight="fill" />,
    title: "Compra simples e segura",
    color: "#C47F17"
  },
  {
    id: 2,
    icon: <Package color="#fff" size={20} weight="fill" />,
    title: "Embalagem reforçada",
    color: "#574F4D"
  },
  {
    id: 3,
    icon: <Clock color="#fff" size={20} weight="fill" />,
    title: "Entrega rápida e rastreada",
    color: "#DBAC2C"
  },
  {
    id: 4,
    icon: <Coffee color="#fff" size={20} weight="fill" />,
    title: "O café chega fresquinho",
    color: "#8047F8"
  },
];
