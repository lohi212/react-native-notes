import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import uuid from "react-native-uuid";
import Header from "./src/components/Header";
import NotesList from "./src/components/NotesList";

export default function App() {
  // console.log(uuid.v4());
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <Header />
        <NotesList />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    height: "100%",
  },
});
