function createTask() {
    // Code for creating a new task
}

function editTask(taskId) {
    // Code for editing a task
}

function deleteTask(taskId) {
    // Code for deleting a task
}

// Sample tasks (You can replace this with dynamic data)
const tasks = [
    { id: 1, title: "Task 1", status: "pending" },
    { id: 2, title: "Task 2", status: "in-progress" },
    { id: 3, title: "Task 3", status: "completed" }
];

// Render tasks
const taskList = document.getElementById('task-list');
tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;
    li.classList.add(task.status);
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('btn', 'btn-edit');
    editBtn.onclick = function() {
        editTask(task.id);
    };
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn', 'btn-delete');
    deleteBtn.onclick = function() {
        deleteTask(task.id);
    };
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
});
