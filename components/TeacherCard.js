import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider"; // Assuming you're using a theme provider
import { typography } from "../theme/typography"; // Assuming typography styles are predefined

const TeacherCard = ({ name, subject, image }) => {
  const { theme } = useTheme(); // Access dynamic theme colors

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.oncard,
        },
      ]}
    >
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover" // Ensures the image fits nicely
      />
      <Text
        style={[
          styles.name,
          typography.body, // Assume typography.body has shared styles
          { color: theme.colors.textPrimary },
        ]}
      >
        {name}
      </Text>
      <Text
        style={[
          styles.subject,
          typography.smallText, // Assume typography.smallText has shared styles
          { color: theme.colors.textSecondary },
        ]}
      >
        {subject}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    width: 120,
    elevation: 4, // Shadow for Android
    marginVertical: 12,
    marginHorizontal: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15, // Subtle shadow
    shadowRadius: 8,
    shadowOffset: { width: 4, height: 4 },
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  subject: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default TeacherCard;
