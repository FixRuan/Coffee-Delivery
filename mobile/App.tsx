import React from "react";
import { Home } from "./src/screens/Home/Home";
import { useCachedResources } from "./src/hooks/useCachedResources";
import { Text } from "react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Home />
    </>
  );
}
