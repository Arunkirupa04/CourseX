import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { ThemeProvider } from "./theme/ThemeProvider";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Exo-Regular": require("./assets/fonts/Exo-Regular.ttf"),
    "Exo-Medium": require("./assets/fonts/Exo-Medium.ttf"),
    "Exo-SemiBold": require("./assets/fonts/Exo-SemiBold.ttf"),
    "Exo-Light": require("./assets/fonts/Exo-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
