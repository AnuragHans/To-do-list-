function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const taskText = taskInput.value;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
  }
}

function removeTask(task) {
  const listItem = task.parentElement;
  const taskList = document.getElementById('taskList');

  taskList.removeChild(listItem);
}
