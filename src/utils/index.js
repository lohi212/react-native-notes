import AsyncStorage from "@react-native-async-storage/async-storage";

export const getNotes = async () => {
  try {
    const notes = JSON.parse(await AsyncStorage.getItem("notes")) || "[]";
    return notes;
  } catch (e) {
    console.error("Error to get notes in AsyncStorage", e);
  }
};

export const setNotes = async (data) => {
  try {
    const notes = JSON.parse((await AsyncStorage.getItem("notes")) || "[]");
    const newNotes = [...notes, { ...data }];
    console.log({ newNotes });
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
  } catch (e) {
    console.error("Error to set notes in AsyncStorage", e);
  }
};
