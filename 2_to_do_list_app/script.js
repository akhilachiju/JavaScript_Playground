const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  tasks.push(taskText);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center bg-gray-100 px-3 py-2 rounded";

    const span = document.createElement("span");
    span.textContent = task;
    span.className = "cursor-pointer flex-1";

    span.addEventListener("click", () => {
      span.classList.toggle("line-through");
      span.classList.toggle("text-gray-400");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.className =
      "text-red-500 hover:text-red-700 font-bold ml-2";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
