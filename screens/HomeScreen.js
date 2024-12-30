import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import InstitutionCard from "../components/InstitutionCard";
import { useTheme } from "../theme/ThemeProvider";
import { typography } from "../theme/typography";
import SearchInput from "../components/SearchInput";
import { useClickContext } from "../context/ClickContext";
import { useUser } from "../context/UserContext";

const HomeScreen = ({ route }) => {
  const { username } = useUser();
  const { theme } = useTheme();
  const { clickCount } = useClickContext();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses/");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView>
        <Text
          style={[
            styles.title,
            typography.title,
            { color: theme.colors.textPrimary },
          ]}
        >
          Welcome Back
        </Text>
        <Text
          style={[
            styles.subtitle,
            typography.subtitle,
            { color: theme.colors.textSecondary },
          ]}
        >
          {username} !
        </Text>
        <SearchInput />
        <Text
          style={[
            styles.sectionTitle,
            typography.subtitle,
            { color: theme.colors.textPrimary },
          ]}
        >
          Available Courses
        </Text>
        {courses.map((course) => (
          <InstitutionCard
            key={course._id}
            name={course.name}
            institute={course.institute}
            rating={course.rating}
            description={course.shortDescription}
            image={course.imageUrl}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.floatingButton,
          { backgroundColor: theme.colors.primary },
        ]}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>{clickCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  floatingButton: {
    position: "absolute",
    bottom: 70,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});

export default HomeScreen;
