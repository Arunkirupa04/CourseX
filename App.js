import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { ThemeProvider } from "./theme/ThemeProvider"; // Custom provider for themes
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignupScreen";
import BottomNavBar from "./components/bottomNavbar";

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
      {/* <BottomNavBar /> */}
      {/* <HomeScreen /> */}
      <LoginScreen />
      {/* <SignUpScreen /> */}
    </ThemeProvider>
  );
}
