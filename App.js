import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import uuid from "react-native-uuid";
import AppHeader from "./src/components/AppHeader";
import Main from "./src/components/Main";
import NotesList from "./src/components/NotesList";

export default function App() {
  // console.log(uuid.v4());
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <Main />
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
