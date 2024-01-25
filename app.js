let taskToAdd = document.getElementById('addinput');
const addButton = document.querySelector('#createTask');
const taskarea = document.querySelector(".tasks");

function addTask() {
    let newTask = document.createElement('p');
    newTask.innerHTML = taskToAdd.value;

    taskarea.append(newTask);
    taskToAdd.value = "";

}

function deleteTask() {

}

addButton.addEventListener('click', addTask)