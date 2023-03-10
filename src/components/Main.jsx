import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeader from "./AppHeader";
import NotesList from "./NotesList";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <NotesList />
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
