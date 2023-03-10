import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NotesListItem from "./NotesListItem";
import { getNotes } from "../utils";

const NotesList = ({ route }) => {
  const [notesListItems, setNotesListItems] = useState([]);

  useEffect(() => {
    getNotesList();
  }, []);

  const getNotesList = () => {
    if (route.params && route.params.notes)
      setNotesListItems(route.params.notes);
    else {
      getNotes().then((res) => {
        setNotesListItems(res);
      });
    }
  };

  return (
    <View style={styles.container}>
      {(notesListItems || []).length ? (
        notesListItems.map((ele) => <NotesListItem item={ele} />)
      ) : (
        <Text>No notes added yet!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "94%",
    flexDirection: "row",
  },
});

export default NotesList;
