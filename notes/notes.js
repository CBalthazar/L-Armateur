const main = document.querySelector("main");
const noteDiv = document.querySelector(".notes");
const addNoteBtn = document.querySelector(".add-note");

function addNote(text = "", title = "") {
  //_ is event
  const note = noteDiv.appendChild(document.createElement("div"));
  note.classList.add("note");

  const divTitle = document.createElement("div");
  const divText = document.createElement("div");

  const titleArea = divTitle.appendChild(document.createElement("textarea"));
  const textArea = divText.appendChild(document.createElement("textarea"));

  titleArea.setAttribute("placeholder", "Add Title...");
  titleArea.classList.add("titleArea");
  textArea.setAttribute("placeholder", "Add Text...");
  textArea.classList.add("textArea");

  titleArea.value = title;
  textArea.value = text;

  note.append(divTitle, divText);
}

addNoteBtn.addEventListener("click", () => {
  addNote();
});
addNoteBtn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.click();
  }
});
