let taskToAdd = document.getElementById('add input');
const addButton = document.getElementById('create-task');
let taskarea = document.getElementsByClassName("tasks");

function addTask() {
    let newTask = document.createElement('p');
    newTask.innerHTML = taskToAdd.value;

    taskarea.append(newTask);
    taskToAdd.value = '';
}

function deleteTask() {

}

addButton.addEventListener('click', addTask)