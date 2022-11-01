import React from "react";
import { Home } from "./src/screens/Home/Home";
import { useCachedResources } from "./src/hooks/useCachedResources";
import { Text } from "react-native";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/styles/theme";
import { BottomTab } from "./src/Router";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <Text>Loading...</Text>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <BottomTab />
    </ThemeProvider>
  );
}
