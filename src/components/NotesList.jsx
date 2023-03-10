import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { getNotes } from "../utils";

const NotesList = () => {
  const notesListItems = getNotes();
  return (
    <View style={styles.container}>
      {notesListItems.length ? (
        <Text>List items there</Text>
      ) : (
        <Text>No notes added yet!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "94%",
  },
});

export default NotesList;
