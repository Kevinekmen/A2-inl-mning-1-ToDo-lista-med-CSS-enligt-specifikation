const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const error = document.getElementById("error");
const countText = document.getElementById("count");

let completed = 0;

button.addEventListener("click", addTodo);

function addTodo() {
  const text = input.value.trim();

  if (text === "") {
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");

  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = text;

  const trash = document.createElement("span");
  trash.textContent = "🗑️";
  trash.className = "trash";

  li.appendChild(textSpan);
  li.appendChild(trash);
  list.appendChild(li);

  textSpan.addEventListener("click", function () {
    if (li.classList.contains("completed")) {
      li.classList.remove("completed");
      completed--;
    } else {
      li.classList.add("completed");
      completed++;
    }
    countText.textContent = completed;
  });

  trash.addEventListener("click", function () {
    if (li.classList.contains("completed")) {
      completed--;
      countText.textContent = completed;
    }
    li.remove();
  });

  input.value = "";
}
