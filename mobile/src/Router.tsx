import React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";

import { ShoppingCart, Coffee } from "phosphor-react-native";

import { Home } from "./screens/Home/Home";
import { Order } from "./screens/Order/Order";

const { Screen, Navigator } = createBottomTabNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export function BottomTab() {
  const { colors } = useTheme();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors["brand-yellow-dark"],
        tabBarInactiveTintColor: colors.background,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 60,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          borderTopColor: colors.background,
          backgroundColor: colors["brand-purple-dark"],
        }
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (<Coffee color={color} />)
        }}
      />

      <Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ color }) => (<ShoppingCart color={color} />)
        }}
      />
    </Navigator>
  );
}
