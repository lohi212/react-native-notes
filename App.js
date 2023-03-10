import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import uuid from "react-native-uuid";
import Main from "./src/components/Main";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // console.log(uuid.v4());
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    height: "100%",
  },
});
