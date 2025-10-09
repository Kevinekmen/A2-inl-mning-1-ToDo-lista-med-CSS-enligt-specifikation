const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const doneCount = document.getElementById("doneCount");

let tasks = []; 

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    message.classList.remove("hidden");
    message.classList.add("blink");
    setTimeout(() => message.classList.remove("blink"), 500);
    return;
  }

  message.classList.add("hidden");

  const task = { text: text, done: false };
  tasks.push(task);
  renderTasks();

  taskInput.value = "";
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) li.classList.add("completed");

    
    li.addEventListener("click", () => toggleTask(index));

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTask(index);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

  updateDoneCount();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function updateDoneCount() {
  const done = tasks.filter(task => task.done).length;
  doneCount.textContent = `Klara uppgifter: ${done}`;
}