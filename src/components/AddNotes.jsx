import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#efefef",
    borderRadius: "50%",
    height: 60,
    width: 60,
    fontSize: 20,
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});

const AddNotes = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>+</Text>
    </TouchableOpacity>
  );
};

export default AddNotes;
