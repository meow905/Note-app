const notes_area = document.querySelector(".notes_area");
const btn = document.querySelector(".btn");

function getData() {
  const savedNotes = JSON.parse(localStorage.getItem("Notes")) || [];
  notes_area.innerHTML = "";

  savedNotes.forEach((note) => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.setAttribute("width", "30px");
    img.src = "img/bin.png";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.className = "note_place";
    inputBox.textContent = note;
    notes_area.appendChild(inputBox).appendChild(img);
  });
}

function setData() {
  const notes = [];
  document.querySelectorAll(".note_place").forEach((note) => {
    notes.push(note.textContent);
  });
  localStorage.setItem("Notes", JSON.stringify(notes));
}

btn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  img.setAttribute("width", "30px");
  img.src = "img/bin.png";
  inputBox.setAttribute("contenteditable", "true");
  inputBox.className = "note_place";
  notes_area.appendChild(inputBox).appendChild(img);
  setData();
});

notes_area.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    setData();
  }
});

notes_area.addEventListener("input", () => {
  setData();
});

getData();
