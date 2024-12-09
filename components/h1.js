import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeProvider"; // Assuming you are using a theme provider for dynamic colors
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign and FontAwesome5 icons

const BottomNavBar = () => {
  const { theme } = useTheme(); // Assuming you are using a theme for colors
  const [selected, setSelected] = useState("Home");

  const navItems = [
    { name: "Home", icon: "home", iconSet: "AntDesign" }, // AntDesign icon
    { name: "Explore", icon: "search1", iconSet: "AntDesign" }, // AntDesign icon
    { name: "Stream", icon: "play", iconSet: "AntDesign" }, // AntDesign icon
    { name: "Profile", icon: "user", iconSet: "AntDesign" },
  ];

  return (
    <View
      style={[styles.navbarContainer, { backgroundColor: theme.colors.oncard }]}
    >
      <View style={[styles.navbar, { backgroundColor: theme.colors.oncard }]}>
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.navItem}
            onPress={() => setSelected(item.name)}
          >
            <View style={styles.iconWrapper}>
              {selected === item.name && (
                <View
                  style={[
                    styles.topLine,
                    { backgroundColor: theme.colors.primary },
                  ]}
                />
              )}
              {/* Render icons based on the set */}
              <AntDesign
                name={item.icon}
                size={20}
                color={
                  selected === item.name
                    ? theme.colors.primary
                    : theme.colors.textSecondary
                }
              />
            </View>
            <Text
              style={[
                styles.navText,
                {
                  color:
                    selected === item.name
                      ? theme.colors.primary
                      : theme.colors.textSecondary,
                },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: "absolute", // Ensures the navbar stays at the bottom of the screen
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, // Rounded top corners
    overflow: "hidden", // To prevent content from spilling outside the rounded corners
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    width: "100%", // Ensure it takes full width
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.1)", // Light top border
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconWrapper: {
    alignItems: "center",
  },
  topLine: {
    width: 30,
    height: 3,
    borderRadius: 2,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    marginTop: 3,
  },
});

export default BottomNavBar;
