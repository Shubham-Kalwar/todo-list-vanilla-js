document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');
  
  function createTask(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.innerText = taskText;

    const btnGroup = document.createElement('div');
    btnGroup.className = 'task-buttons';

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '✔️';
    completeBtn.className = 'task-btn complete';
    completeBtn.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.className = 'task-btn delete';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    taskList.appendChild(li);
  }

  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      createTask(taskText);
      taskInput.value = '';
      taskInput.focus();
    }
  });

  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });
});
        
