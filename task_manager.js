let taskIdCounter = 0;
const taskList = [];
document.querySelector('button').addEventListener('click', () => {
    const inputText = document.querySelector('textarea').value;
    if (inputText === "") return;
    const taskContainer = document.getElementById('list');
    const taskId = taskIdCounter++;
    const taskElement = document.createElement('h3');
    const buttonElement = document.createElement('button');
    buttonElement.innerText = taskId + 1;
    buttonElement.id = `button_${taskId}`;
    buttonElement.addEventListener('click', () => {
        moveTaskToCompleted(taskId);
    });
    taskElement.appendChild(buttonElement);
    taskElement.appendChild(document.createTextNode(` ${inputText}`));
    taskContainer.appendChild(taskElement);
    taskList.push({ id: taskId, text: inputText, completed: false });
    console.log(taskId);
});

function moveTaskToCompleted(taskId) {
    const taskToRemove = document.getElementById(`button_${taskId}`);
    if (taskToRemove.style.backgroundColor === 'green') {
        return;
    }
    const taskElement = taskToRemove.parentNode;
    taskToRemove.style.backgroundColor = 'green';
    taskToRemove.innerText = '';
    const completedTaskElement = taskElement.cloneNode(true);
    completedTaskElement.removeChild(completedTaskElement.querySelector('button'));
    taskElement.style.textDecoration = 'line-through';
    const completedColumn = document.querySelector('.done');
    completedColumn.appendChild(completedTaskElement);
    const taskIndex = taskList.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        taskList[taskIndex].completed = true;
    }
}
