import './style.css';

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
    const list = `<div class="eachTask">
      <div class="group-list">
      <input type="checkbox" class="box" id="list-box" name="list-box">
        <p class="task-name">${each.description}</p>
      </div> 
      <button class="menu-icon" id="${each.id}"><i class="fas fa-ellipsis-v"></i></button>
    </div>
    <hr>`;
    allTasks.innerHTML += list;
  }
};

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