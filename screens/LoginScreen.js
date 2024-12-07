import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import { typography } from "../theme/typography";

const LoginScreen = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Image */}
      <Image
        source={require("../assets/images/signup.svg")}
        style={styles.image}
        resizeMode="contain"
      />
      {/* Title */}
      <Text
        style={[styles.title, typography.title, { color: theme.colors.title }]}
      >
        Welcome Back
      </Text>
      {/* Input Fields */}
      <Text
        style={[
          styles.subtitle,
          typography.body,
          {
            color: theme.colors.title,
            alignSelf: "flex-start",
            marginLeft: "5%",
          },
        ]}
      >
        Email
      </Text>
      <TextInput
        style={[
          styles.input,
          typography.input,
          {
            backgroundColor: theme.colors.inputBackground,
          },
        ]}
        placeholder="Enter your Email"
        placeholderTextColor={theme.colors.placeholder}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text
        style={[
          styles.subtitle,
          typography.body,
          {
            color: theme.colors.title,
            alignSelf: "flex-start",
            marginLeft: "5%",
          },
        ]}
      >
        Password
      </Text>
      <TextInput
        style={[
          styles.input,
          typography.input,
          {
            backgroundColor: theme.colors.inputBackground,
            color: theme.colors.text,
          },
        ]}
        placeholder="Password"
        placeholderTextColor={theme.colors.placeholder}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Sign In Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => console.log("Sign In Button Pressed")}
      >
        <Text
          style={[
            styles.buttonText,
            typography.smallText,
            { color: theme.colors.buttonText },
          ]}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      {/* Sign Up Link */}
      <Text
        style={[
          styles.footerText,
          typography.smallText,
          { color: theme.colors.subtitle },
        ]}
      >
        Don't you have an account?{" "}
        <Text
          style={[
            styles.linkText,
            typography.smallText,
            { color: theme.colors.primary },
          ]}
          onPress={() => console.log("Sign Up Link Pressed")}
        >
          Sign Up
        </Text>
      </Text>
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
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "left",
    marginBottom: 10,
  },
  input: {
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    width: "90%",
    paddingVertical: 15,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
  },
  footerText: {
    textAlign: "center",
  },
  linkText: {
    fontWeight: "bold",
  },
});

export default LoginScreen;
