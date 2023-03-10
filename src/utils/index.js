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

const RANDOM_COLORS = [
  "#66CCCC",
  "#36465D",
  "#00A68C",
  "#660033",
  "#666699",
  "#33CCCC",
  "#999966",
  "#996633",
  "#336633",
  "#990066",
  "#33CC99",
  "#CCFFCC",
];

export const getColorCode = () => {
  const colors = RANDOM_COLORS;
  const random = Math.floor(Math.random() * colors.length);

  return colors[random];
};
