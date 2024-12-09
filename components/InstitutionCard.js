import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider"; // Assuming you are using a ThemeProvider
import { typography } from "../theme/typography";

const InstitutionCard = ({
  name,
  rating,
  reviews,
  field,
  description,
  image,
}) => {
  const { theme } = useTheme(); // Access the dynamic theme

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.colors.oncard }, // Apply dynamic theme color
      ]}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.name,
            typography.subtitle,
            { color: theme.colors.textPrimary }, // Dynamic text color
          ]}
        >
          {name}
        </Text>{" "}
        <Text
          style={[
            styles.rating,
            typography.smallText,
            { color: theme.colors.textSecondary }, // Dynamic text color
          ]}
        >
          ⭐ {rating} ({reviews} reviews)
        </Text>
        <Text
          style={[
            styles.field,
            typography.body,
            { color: theme.colors.textSecondary }, // Dynamic text color
          ]}
        >
          {field}
        </Text>
        <Text
          style={[
            styles.description,
            typography.smallText,
            { color: theme.colors.textSecondary }, // Dynamic text color
          ]}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  image: {
    width: 100,
    // height: 120,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "semibold",
    fontSize: 12,
  },
  field: {
    marginTop: 4,
    fontSize: 12,
  },
  description: {
    fontSize: 10,
    marginTop: 4,
  },
  rating: {
    fontSize: 10,
    marginTop: 5,
  },
});

export default InstitutionCard;
