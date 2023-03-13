import AsyncStorage from "@react-native-async-storage/async-storage";

export const getNotes = async () => {
  AsyncStorage.setItem(
    "notes",
    JSON.stringify([
      {
        id: "12fcfcf333gfc",
        text: "Add interactions to videos and fix css for cards",
      },
      {
        id: "12fcfcf333gdd",
        text: "Apis to save the data and fetch the data from mongodb",
      },
      {
        id: "12fcfcf333gee",
        text: "Test videos making for demo with XYZ and ABC",
      },
      {
        id: "12fcfcf333gff",
        text: "Add filter for notes to search by category and return results",
      },
      {
        id: "12fcfcf333ggg",
        text: "Relevant error messages in response to all the apis",
      },
    ])
  );
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
