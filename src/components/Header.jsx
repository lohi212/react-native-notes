import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#efefef",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Notes App </Text>
      <Text style={styles.headerText}>📑</Text>
    </View>
  );
};

export default Header;
