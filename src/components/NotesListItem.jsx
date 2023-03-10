import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NotesListItem = ({ item }) => {
  return (
    <View key={item.id} style={styles.card}>
      <Text numberOfLines={2}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "30%",
    padding: 10,
    margin: 10,
  },
  textContainer: {
    maxWidth: "33%",
    overflow: "hidden",
    // textOv,
  },
});

export default NotesListItem;
