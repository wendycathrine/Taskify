// Sample tasks data
let tasks = [
    { name: "Create Login Page", status: "created" },
    { name: "Create About Us Page", status: "created" },
    { name: "Create Landing Page", status: "created" },
    { name: "Format forms ", status: "created" },
    { name: "Set up database", status: "inProgress" },
    { name: "Upload Website Assets", status: "inProgress" },
    { name: "Create Sign-UP and login form", status: "completed" },
    { name: "Final figma mock up", status: "completed" },
];

// Function to render tasks based on their status
// function renderTasks() {
//     const createdTasksList = document.getElementById("createdTaskList");
//     const inProgressTasksList = document.getElementById("inProgressTaskList");
//     const completedTasksList = document.getElementById("completedTaskList");

//     createdTasksList.innerHTML = "";
//     inProgressTasksList.innerHTML = "";
//     completedTasksList.innerHTML = "";

//     tasks.forEach(task => {
//         const li = document.createElement("li");
//         li.textContent = `${task.name}`;
        
//         if (task.status === "created") {
//             createdTasksList.appendChild(li);
//         } else if (task.status === "inProgress") {
//             inProgressTasksList.appendChild(li);
//         } else if (task.status === "completed") {
//             li.classList.add("completed");
//             completedTasksList.appendChild(li);
//         }
//     });
// }

// Function to render tasks based on their status
function renderTasks() {
    const createdTasksList = document.getElementById("createdTaskList");
    const inProgressTasksList = document.getElementById("inProgressTaskList");
    const completedTasksList = document.getElementById("completedTaskList");

    createdTasksList.innerHTML = "";
    inProgressTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${index}: ${task.name}`; // Display index along with task name

        if (task.status === "created") {
            createdTasksList.appendChild(li);
        } else if (task.status === "inProgress") {
            inProgressTasksList.appendChild(li);
        } else if (task.status === "completed") {
            li.classList.add("completed");
            completedTasksList.appendChild(li);
        }
    });
}

// Function to create a new task
function createTask() {
    const taskName = prompt("Enter task name:");
    if (taskName) {
        tasks.push({ name: taskName, status: "created" });
        renderTasks();
    }
}

// Function to edit a task
function editTask() {
    const taskIndex = prompt("Enter the Number of the task to edit:");
    const newTaskName = prompt("Enter the new task name:");
    if (taskIndex && newTaskName && tasks[taskIndex]) {
        tasks[taskIndex].name = newTaskName;
        renderTasks();
    }
}

// Function to delete a task
function deleteTask() {
    const taskIndex = prompt("Enter the number of the task to delete:");
    if (taskIndex && tasks[taskIndex]) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}

// Initial rendering
renderTasks();
