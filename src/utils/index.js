export const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes") || "[]");
};

export const setNotes = (data) => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  const newNotes = [...notes, { ...data }];
  localStorage.setItem("notes", JSON.stringify(newNotes));
};
