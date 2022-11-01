import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen, Navigator } = createBottomTabNavigator();

import { Home } from "./screens/Home/Home";
import { Order } from "./screens/Order/Order";

export function BottomTab() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Order" component={Order} />
    </Navigator>
  );
}
