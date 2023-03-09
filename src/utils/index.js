import AsyncStorage from "@react-native-async-storage/async-storage";

export const getNotes = async () => {
  try {
    return JSON.parse((await AsyncStorage.getItem("notes")) || "[]");
  } catch (e) {
    console.error("Error to get notes in AsyncStorage", e);
  }
};

export const setNotes = async (data) => {
  try {
    const notes = JSON.parse(AsyncStorage.getItem("notes") || "[]");
    const newNotes = [...notes, { ...data }];
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
  } catch (e) {
    console.error("Error to set notes in AsyncStorage", e);
  }
};
