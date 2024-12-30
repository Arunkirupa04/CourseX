import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { useTheme } from "../theme/ThemeProvider"; // Assuming a ThemeProvider is being used
import { AntDesign } from "@expo/vector-icons";
import { typography } from "../theme/typography";

const ProfileScreen = () => {
  const { theme, toggleTheme } = useTheme(); // Assuming a toggleTheme function is available
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    toggleTheme();
  };

  const profileDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    image: "https://via.placeholder.com/150", // Replace with your profile image URL
  };

  const menuItems = [
    { name: "Edit Profile", icon: "edit" },
    { name: "My Courses", icon: "book" },
    { name: "Change Password", icon: "lock" },
    { name: "Privacy Policy", icon: "filetext1" },
  ];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {/* Header */}
      <Text
        style={[
          styles.title,
          typography.title,
          { color: theme.colors.textPrimary },
        ]}
      >
        Profile
      </Text>

      {/* Profile Image and Details */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: profileDetails.image }}
          style={styles.profileImage}
        />
        <Text
          style={[
            styles.name,
            typography.title,
            { color: theme.colors.textPrimary },
          ]}
        >
          {profileDetails.name}
        </Text>
        <Text
          style={[
            styles.email,
            typography.subtitle,
            { color: theme.colors.textSecondary },
          ]}
        >
          {profileDetails.email}
        </Text>
      </View>

      {/* Menu List */}
      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <AntDesign
                name={item.icon}
                size={24}
                color={theme.colors.textSecondary}
              />
              <Text
                style={[
                  styles.menuText,
                  typography.body,
                  { color: theme.colors.textSecondary },
                ]}
              >
                {item.name}
              </Text>
            </View>
            <AntDesign
              name="right"
              size={18}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.toggleContainer}>
        <Text
          style={[
            styles.menuText,
            typography.body,
            { color: theme.colors.textSecondary },
          ]}
        >
          Dark Mode
        </Text>
        <Switch
          value={darkMode}
          onValueChange={handleToggleDarkMode}
          trackColor={{ false: "#767577", true: theme.colors.primary }}
          thumbColor={darkMode ? theme.colors.primary : "#f4f3f4"}
        />
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>
          Logout
        </Text>
        <AntDesign
          name="logout"
          size={20}
          color={theme.colors.buttonText}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <Text style={styles.end}></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
  menuList: {
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    marginBottom: 20,
  },
  button: {
    width: "90%",
    paddingVertical: 15,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 16,
    marginRight: 10,
  },
  buttonIcon: {
    marginLeft: 5,
  },
  end: {
    marginTop: 15,
  },
});

export default ProfileScreen;
