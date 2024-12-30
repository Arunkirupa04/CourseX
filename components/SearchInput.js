import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider"; // Accessing theme colors
import { typography } from "../theme/typography"; // For consistent text styles
import { Ionicons } from "@expo/vector-icons"; // Using Ionicons for the search icon

const SearchInput = () => {
  const { theme } = useTheme(); // Access dynamic theme colors

  return (
    <View
      style={[styles.inputContainer, { backgroundColor: theme.colors.oncard }]}
    >
      <TextInput
        style={[
          styles.searchInput,
          typography.input,
          {
            color: theme.colors.textPrimary,
          },
        ]}
        placeholder="Search your Courses"
        placeholderTextColor={theme.colors.textSecondary}
      />
      <Ionicons
        name="search"
        size={20}
        color={theme.colors.buttonText}
        style={[
          styles.icon,
          {
            shadowColor: "#000",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#ccc", // This can be replaced with theme.colors if needed
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2, // Subtle shadow
    shadowRadius: 8,
    shadowOffset: { width: 4, height: 4 },
  },
  icon: {
    backgroundColor: "#F64D4B",
    shadowOpacity: 0.2, // Subtle shadow
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 5,
    margin: 2,
    borderRadius: 8,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default SearchInput;
