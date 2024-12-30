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

const SignUpScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // For validation errors

  // Validation functions
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => password.length >= 6;

  const handleSignUp = () => {
    let newErrors = {};

    if (!userName) newErrors.userName = "userName is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (!isValidPassword(password)) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    // If no errors, navigate to Login screen
    if (Object.keys(newErrors).length === 0) {
      navigation.navigate("Login");
    }
  };

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

      {/* userName Field */}
      <Text style={[styles.subtitle, { color: theme.colors.title }]}>
        userName
      </Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.colors.inputBackground },
        ]}
        placeholder="Enter your userName"
        placeholderTextColor={theme.colors.placeholder}
        value={userName}
        onChangeText={(text) => setuserName(text)}
      />
      {errors.userName && (
        <Text style={styles.errorText}>{errors.userName}</Text>
      )}

      {/* Email Field */}
      <Text style={[styles.subtitle, { color: theme.colors.title }]}>
        Email
      </Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.colors.inputBackground },
        ]}
        placeholder="Enter your Email"
        placeholderTextColor={theme.colors.placeholder}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      {/* Password Field */}
      <Text style={[styles.subtitle, { color: theme.colors.title }]}>
        Password
      </Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.colors.inputBackground },
        ]}
        placeholder="Create a Password"
        placeholderTextColor={theme.colors.placeholder}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      {/* Sign Up Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={handleSignUp}
      >
        <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Link to Login */}
      <Text style={[styles.footerText, { color: theme.colors.subtitle }]}>
        Already have an account?{" "}
        <Text
          style={[styles.linkText, { color: theme.colors.primary }]}
          onPress={() => navigation.navigate("Login")}
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
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginBottom: 5,
  },
  input: {
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginBottom: 10,
    fontSize: 12,
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
  },
});

export default SignUpScreen;
