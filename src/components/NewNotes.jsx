import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import uuid from "react-native-uuid";

const NewNotes = ({ navigation }) => {
  const [notesTxt, setNotesTxt] = useState("");
  const richText = React.useRef();

  const handleCustomAction = () => {
    setNotes({
      id: uuid.v4(),
      text: notesTxt,
    });
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>✔️</Text>
      </TouchableOpacity>
      <RichToolbar
        editor={richText}
        actions={[
          actions.heading1,
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertImage,
          actions.setStrikethrough,
          actions.undo,
          actions.redo,
          "customAction",
        ]}
        iconMap={{
          customAction: "✔️",
        }}
        customAction={handleCustomAction}
      />
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboard}
        >
          <RichEditor
            initialFocus
            ref={richText}
            initialHeight={500}
            onBlur={(descriptionText) => {
              setNotesTxt(descriptionText);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  keyboard: {
    flex: 1,
  },
});

export default NewNotes;
