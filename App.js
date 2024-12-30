import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "./theme/ThemeProvider"; // Import ThemeProvider
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AppNavigator from "./navigation/AppNavigator";
import { ClickProvider } from "./context/ClickContext";
import { UserProvider } from "./context/UserContext";
import WelcomeScreen from "./screens/WelcomeScreen"; // Import WelcomeScreen

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Exo-Regular": require("./assets/fonts/Exo-Regular.ttf"),
    "Exo-Medium": require("./assets/fonts/Exo-Medium.ttf"),
    "Exo-SemiBold": require("./assets/fonts/Exo-SemiBold.ttf"),
    "Exo-Light": require("./assets/fonts/Exo-Light.ttf"),
  });

  const [showWelcome, setShowWelcome] = useState(true);

  // Show WelcomeScreen for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    // Wrap the entire app with the ThemeProvider
    <ThemeProvider>
      <ClickProvider>
        <UserProvider>
          {showWelcome ? (
            <WelcomeScreen />
          ) : (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Signup"
                  component={SignupScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Main"
                  component={AppNavigator}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          )}
        </UserProvider>
      </ClickProvider>
    </ThemeProvider>
  );
}
