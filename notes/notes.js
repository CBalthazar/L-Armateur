const main = document.querySelector("main");
const newNotediv = document.querySelector(".new-note");
const newNoteBtn = document.querySelector(".add-note");
const saveNoteBtn = document.querySelector(".save-note");
const loadNoteBtn = document.querySelector(".load-note");
const notes = document.querySelector(".notes");

const id = "../Assets/Tests/Starry Night"; //for now, to change

function newNote(text = "", title = "") {
  // make new note, delete current if exists
  newNotediv.innerHTML = "";
  const note = newNotediv.appendChild(document.createElement("div"));
  const divTitle = document.createElement("div");
  const divText = document.createElement("div");
  const titleArea = divTitle.appendChild(document.createElement("textarea"));
  const textArea = divText.appendChild(document.createElement("textarea"));

  titleArea.setAttribute("placeholder", "Add Title...");
  textArea.setAttribute("placeholder", "Add Text...");
  titleArea.classList.add("titleArea");
  textArea.classList.add("textArea");
  titleArea.value = title;
  textArea.value = text;

  note.classList.add("note");
  note.append(divTitle, divText);
}

function loadNotes(container) {
  container.innerHTML = "";
  let storedNotes = JSON.parse(localStorage.getItem("notes"));
  storedNotes[id].forEach((noteObject) => {
    let note = container.appendChild(document.createElement("div"));
    note.classList.add("note");
    let title = note.appendChild(document.createElement("h2"));
    let text = note.appendChild(document.createElement("p"));
    title.textContent = noteObject.title;
    text.textContent = noteObject.text;
  });
}

function saveNote() {
  //get note content

  const textareas = document.querySelectorAll("textarea");
  let note = {};
  note.title = textareas[0].value;
  note.text = textareas[1].value;

  let storedNotes = JSON.parse(localStorage.getItem("notes"));
  if (!storedNotes) {
    storedNotes = {};
  }
  if (!storedNotes[id]) {
    storedNotes[id] = [];
  }
  storedNotes[id].push(note);
  localStorage.setItem("notes", JSON.stringify(storedNotes));
  loadNotes(notes);
}

newNoteBtn.addEventListener("click", () => {
  // anonymous function so event is not passed in argument
  newNote();
});
newNoteBtn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.click();
  }
});

loadNoteBtn.addEventListener("click", () => {
  // anonymous function so event is not passed in argument
  loadNotes(notes);
});
loadNoteBtn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.click();
  }
});

saveNoteBtn.addEventListener("click", () => {
  // anonymous function so event is not passed in argument
  saveNote();
});
saveNoteBtn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.click();
  }
});
