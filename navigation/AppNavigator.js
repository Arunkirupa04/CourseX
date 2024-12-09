import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icons
import { useTheme } from "../theme/ThemeProvider"; // Assuming you're using a theme provider for dynamic colors
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const ExploreScreen = () => {
  console.log("Explore Screen Loaded");
  return (
    <View>
      <Text>Explore Screen</Text>
    </View>
  );
};

const BottomNavBar = ({ navigation }) => {
  const { theme } = useTheme(); // Get theme for colors
  const [selected, setSelected] = useState("Home");

  const navItems = [
    { name: "Home", icon: "home", route: "Home" },
    { name: "Explore", icon: "search1", route: "Explore" },
    { name: "Stream", icon: "play", route: "Stream" },
    { name: "Profile", icon: "user", route: "Profile" },
  ];

  const handleNavPress = (route) => {
    setSelected(route); // Set selected tab
    navigation.navigate(route); // Navigate to the corresponding screen
  };

  return (
    <View
      style={[styles.navbarContainer, { backgroundColor: theme.colors.oncard }]}
    >
      <View style={[styles.navbar, { backgroundColor: theme.colors.oncard }]}>
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.navItem}
            onPress={() => handleNavPress(item.route)}
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

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <BottomNavBar {...props} />} // Pass props to BottomNavBar
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide header for HomeScreen
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{ headerShown: false }} // Hide header for ExploreScreen
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }} // Hide header for ProfileScreen
        />
      </Tab.Navigator>
    </NavigationContainer>
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
    overflow: "hidden", // Prevents content from spilling outside the rounded corners
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

export default AppNavigator;
