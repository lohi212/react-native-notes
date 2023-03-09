import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddNotes = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textContainer}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fcc295",
    borderRadius: "50%",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    // display at right bottom
    position: "absolute",
    bottom: 0,
    right: 20,
    // box-shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textContainer: {
    fontSize: 30,
  },
});

export default AddNotes;
