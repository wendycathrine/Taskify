// Sample tasks data
let tasks = [
    { name: "Create Landing Page", status: "created" },
    { name: "Update About us ", status: "inProgress" },
    { name: "Finish login and signup", status: "completed" }
];

// Function to render tasks based on their status
function renderTasks() {
    const createdTasksList = document.getElementById("createdTaskList");
    createdTasksList.innerHTML = "";

    tasks.filter(task => task.status === "created").forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.name;

        const editIcon = document.createElement("i");
        editIcon.classList.add("fas", "fa-edit", "edit-icon");
        editIcon.setAttribute("title", "Edit Task");
        editIcon.addEventListener("click", () => displayEditTaskMenu(task.id));

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");
        deleteIcon.setAttribute("title", "Delete Task");
        deleteIcon.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(editIcon);
        li.appendChild(deleteIcon);

        createdTasksList.appendChild(li);
    });
}

// Function to create a new task
function createTask() {
    const taskName = prompt("Enter task name:");
    if (taskName) {
        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            status: "created"
        };
        tasks.push(newTask);
        renderTasks();
    }
}

// Function to display the edit task menu
function displayEditTaskMenu(taskId) {
    const editTaskMenu = document.getElementById("editTaskMenu");
    const saveEditTaskButton = document.getElementById("saveEditTaskButton");
    saveEditTaskButton.dataset.taskId = taskId;
    editTaskMenu.style.display = "block";
}

// Function to cancel editing a task
function cancelEditTask() {
    const editTaskMenu = document.getElementById("editTaskMenu");
    editTaskMenu.style.display = "none";
}

// Function to save the edited task
function saveEditedTask() {
    const taskId = parseInt(document.getElementById("saveEditTaskButton").dataset.taskId);
    const newTaskName = prompt("Enter the new task name:");
    if (newTaskName) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            tasks[taskIndex].name = newTaskName;
            renderTasks();
        }
    }
    cancelEditTask();
}

// Function to delete a task
function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}

// Initial rendering
renderTasks();
