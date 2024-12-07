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

const SignUpScreen = () => {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Image */}
      <Image
        source={require("../assets/images/signup.png")} // Ensure the correct image path
        style={styles.image}
        resizeMode="contain"
      />
      {/* Title */}
      <Text
        style={[styles.title, typography.title, { color: theme.colors.title }]}
      >
        Create an Account
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
        Name
      </Text>
      <TextInput
        style={[
          styles.input,
          typography.input,
          {
            backgroundColor: theme.colors.inputBackground,
          },
        ]}
        placeholder="Enter your Name"
        placeholderTextColor={theme.colors.placeholder}
        value={name}
        onChangeText={(text) => setName(text)}
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
        placeholder="Create a Password"
        placeholderTextColor={theme.colors.placeholder}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Sign Up Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => console.log("Sign Up Button Pressed")}
      >
        <Text
          style={[
            styles.buttonText,
            typography.smallText,
            { color: theme.colors.buttonText },
          ]}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      {/* Link to Login */}
      <Text
        style={[
          styles.footerText,
          typography.smallText,
          { color: theme.colors.subtitle },
        ]}
      >
        Already have an account?{" "}
        <Text
          style={[
            styles.linkText,
            typography.smallText,
            { color: theme.colors.primary },
          ]}
          onPress={() => console.log("Go to Login Pressed")}
        >
          Log In
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
    width: 300,
    height: 300,
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

export default SignUpScreen;
