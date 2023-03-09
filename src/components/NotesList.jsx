import React from "react";
import { Text, View } from "react-native";
import { getNotes } from "../utils";
import AddNotes from "./AddNotes";

const NotesList = () => {
  const notesListItems = getNotes();
  return (
    <View>
      {notesListItems.length ? (
        <Text>List items there</Text>
      ) : (
        <Text>No notes added yet!</Text>
      )}
      <AddNotes />
    </View>
  );
};

export default NotesList;
