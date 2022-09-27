import { useState, useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";

import {
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_700Bold,
  Baloo2_800ExtraBold,
} from "@expo-google-fonts/baloo-2";

export function useCachedResources(): boolean {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);


  useEffect(() => {
    (async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_500Medium,
          Roboto_700Bold,
          Baloo2_400Regular,
          Baloo2_500Medium,
          Baloo2_700Bold,
          Baloo2_800ExtraBold,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    })();

  }, []);

  return isLoadingComplete;
}
