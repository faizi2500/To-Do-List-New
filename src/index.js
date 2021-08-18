import './style.css';
import completedStatus from './complete.js';

const form = document.getElementById('my-form');
const allTasks = document.getElementById('all-tasks');
const insert = document.getElementById('enter-task');
const addTask = document.getElementById('task');

const taskList = [
  {
    description: 'Wash clothes',
    completed: false,
    id: 0,
  },
  {
    description: 'Spend Time With Family',
    completed: false,
    id: 1,
  },
  {
    description: 'Read Books',
    completed: false,
    id: 2,
  },
];

const displayTasks = () => {
  allTasks.innerHTML = '';
  for (let i = 0; i < taskList.length; i += 1) {
    const each = taskList[i];

    const eachTask = document.createElement('div');
    eachTask.className = 'eachTask';

    const list = document.createElement('div');
    list.className = 'group-list';

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'check-box');
    input.id = each.id
    input.addEventListener('change' , (e) => {
      completedStatus(e.target, taskList[i])
    })
    list.appendChild(input);

    const label = document.createElement('label');
    label.innerHTML = `${each.description}`;
    label.className ='form-label';
    list.appendChild(label);

    eachTask.appendChild(list);

    const button = document.createElement('button');
    button.innerHTML = `<i class="fas fa-ellipsis-v">`;
    button.className = 'menu-icon';
    eachTask.appendChild(button);


    const separatingLine = document.createElement("hr");
    eachTask.appendChild(separatingLine);


    allTasks.appendChild(eachTask);

  }
};

// Completed status function


// Add tasks to the taskList array.
const addTaskList = () => {
  const description = addTask.value;
  const completed = false;
  if (description === '') {
    addTask.setAttribute('required', '');
    addTask.style.border = 'thin solid red';
  } else {
    const id = taskList.length;
    const task = { description, completed, id };
    taskList.push(task);
    addTask.style.border = 'thin solid black';
    displayTasks();
  }
  form.reset();
};

insert.addEventListener('click', (e) => {
  e.preventDefault();
  addTaskList();
});

window.onload = displayTasks();