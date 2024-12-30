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
import { useUser } from "../context/UserContext";

const LoginScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { setUsername } = useUser(); // Correct usage
  const [username, setUsernameLocal] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    setErrorMessage("");

    if (!username || !password) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long.");
      return;
    }

    // Update global username context
    setUsername(username);
    navigation.navigate("Main", { username });
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Image
        source={require("../assets/images/signup.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text
        style={[styles.title, typography.title, { color: theme.colors.title }]}
      >
        Welcome Back
      </Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.colors.inputBackground },
        ]}
        placeholder="Enter your Username"
        placeholderTextColor={theme.colors.placeholderText}
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsernameLocal(text)}
      />
      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.colors.inputBackground },
        ]}
        placeholder="Password"
        placeholderTextColor={theme.colors.placeholderText}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {errorMessage && (
        <Text style={[styles.errorText, { color: theme.colors.error }]}>
          {errorMessage}
        </Text>
      )}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={handleLogin}
      >
        <Text
          style={[
            styles.buttonText,
            typography.smallText,
            { color: theme.colors.buttonText },
          ]}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Don't have an account?{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Signup")}
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
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
  },
  errorText: {
    marginBottom: 10,
    fontSize: 14,
    textAlign: "center",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
  },
  linkText: {
    fontWeight: "bold",
    color: "#007BFF",
  },
});

export default LoginScreen;
