document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        ${taskInput.value}
        <button onclick="removeTask(this)">Remover</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}