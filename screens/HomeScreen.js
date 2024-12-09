import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import TeacherCard from "../components/TeacherCard";
import InstitutionCard from "../components/InstitutionCard";
import teachers from "../data/teachers.json";
import institutions from "../data/institutions.json";
import { useTheme } from "../theme/ThemeProvider"; // Assuming theme provider is used for dynamic colors
import { typography } from "../theme/typography";
import SearchInput from "../components/SearchInput";

const HomeScreen = () => {
  const { theme } = useTheme(); // Accessing the theme for dynamic styling

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text
        style={[
          styles.title,
          typography.title,
          { color: theme.colors.textPrimary },
        ]}
      >
        Good evening!
      </Text>
      <Text
        style={[
          styles.title,
          typography.subtitle,
          { color: theme.colors.textSecondary },
        ]}
      >
        Hardline Scott
      </Text>
      <SearchInput />
      <Text
        style={[
          styles.sectionTitle,
          typography.subtitle,
          { color: theme.colors.textPrimary },
        ]}
      >
        Popular Teachers
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} {...teacher} />
        ))}
      </ScrollView>
      <Text
        style={[
          styles.sectionTitle,
          typography.subtitle,
          { color: theme.colors.textPrimary },
        ]}
      >
        Popular Institutions
      </Text>
      {institutions.map((institution) => (
        <InstitutionCard key={institution.id} {...institution} />
      ))}
    </ScrollView>
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
  searchInput: {
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
  },
  sectionTitle: {
    // fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  horizontalScroll: {
    marginBottom: 10,
  },
});

export default HomeScreen;
