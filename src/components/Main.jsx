import React from "react";
import { StyleSheet, View } from "react-native";
import AddNotes from "./AddNotes";
import AppHeader from "./AppHeader";
import NotesList from "./NotesList";

const Main = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <NotesList route={route} />
      <AddNotes navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    height: "100%",
  },
});

export default Main;
