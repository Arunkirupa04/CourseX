import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../theme/ThemeProvider"; // Assuming you are using a theme provider for dynamic colors
import BottomNavBar from "../components/bottomNavbar";
import { typography } from "../theme/typography";

const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme(); // Assuming you are using a theme for colors

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Main content section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text
            style={[
              styles.title,
              typography.title,
              { color: theme.colors.textPrimary },
            ]}
          >
            Welcome to the Home Screen!
          </Text>
        </View>

        {/* Example of other content */}
        <View style={styles.content}>
          <Text style={[styles.text, { color: theme.colors.textSecondary }]}>
            This is the home screen where you can add your content.
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.colors.primary }]}
            onPress={() => navigation.navigate("Explore")}
          >
            <Text style={styles.buttonText}>Go to Explore Screen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 80, // Space for the bottom nav bar
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 20,
    marginBottom: 40, // Extra space for the bottom nav bar
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});

export default HomeScreen;
