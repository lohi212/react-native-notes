import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getColorCode } from "../utils";

const NotesListItem = ({ item }) => {
  const colorCode = getColorCode();
  return item.text ? (
    <View key={item.id} style={{ ...styles.card, backgroundColor: colorCode }}>
      <Text numberOfLines={4}>{item.text}</Text>
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "40%",
    padding: 10,
    margin: 10,
    height: "15%",
  },
  textContainer: {
    maxWidth: "33%",
    overflow: "hidden",
    // textOv,
  },
});

export default NotesListItem;
