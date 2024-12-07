import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeProvider";

const WelcomeScreen = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Image */}
      <Image
        source={require("../assets/images/WelcomeScreen.png")}
        style={styles.image}
        resizeMode="contain"
      />
      {/* Title */}
      <Text style={[styles.title, { color: theme.colors.title }]}>
        Knowledge Beyond the Limits
      </Text>
      {/* Subtitle */}
      <Text style={[styles.subtitle, { color: theme.colors.subtitle }]}>
        Please sign in to view personalized recommendations
      </Text>
      {/* Sign Up Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => console.log("Sign Up Button Pressed")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Exo-SemiBold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "Exo-Medium",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    width: "80%",
    paddingVertical: 15,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Exo-Medium",
    fontSize: 16,
  },
});

export default WelcomeScreen;
