import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import { typography } from "../theme/typography";
import { useClickContext } from "../context/ClickContext";

const InstitutionCard = ({ name, institute, rating, description, image }) => {
  const { theme } = useTheme();
  const { incrementCount } = useClickContext();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.colors.oncard }]}
      onPress={incrementCount}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.name,
            typography.subtitle,
            { color: theme.colors.textPrimary },
          ]}
        >
          {name}
        </Text>
        <Text
          style={[
            styles.rating,
            typography.smallText,
            { color: theme.colors.textSecondary },
          ]}
        >
          ⭐ {rating}
        </Text>
        <Text
          style={[
            styles.field,
            typography.body,
            { color: theme.colors.textSecondary },
          ]}
        >
          {institute}
        </Text>
        <Text
          style={[
            styles.description,
            typography.smallText,
            { color: theme.colors.textSecondary },
          ]}
        >
          {description}
        </Text>
      </View>
    </TouchableOpacity>
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
    height: 140,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "semibold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
  rating: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default InstitutionCard;
