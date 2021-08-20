import './style.css';
import completedStatus from './complete.js';
import addTaskList from './add-to-list.js'
import removeTask from './remove.js'
// import { templateSettings } from 'lodash';

const form = document.getElementById('my-form');
const allTasks = document.getElementById('all-tasks');
const insert = document.getElementById('enter-task');
const addTask = document.getElementById('task');

let taskList = [];

const getData = () => {
  if (localStorage.getItem('taskList') !== null) {
    taskList = JSON.parse(localStorage.getItem('tasklist'));
  }
};

const displayTasks = () => {
  const local = localStorage.getItem('taskList');
  if (local !== null) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  } else {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    getData();
  }

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
    input.id = each.id;
    input.checked = each.completed;
    /* eslint-disable */
    input.addEventListener('change', () => {
      completedStatus(each, taskList);
    });
    /* eslint-enable */
    list.appendChild(input);

    const inputLabel = document.createElement('input');
    inputLabel.value = each.description;
    inputLabel.setAttribute('type', 'text');
    inputLabel.className = 'form-label';
    inputLabel.contentEditable = true;
    list.appendChild(inputLabel);
    eachTask.appendChild(list);

    const button = document.createElement('i');
    button.classList.add('fas', 'fa-ellipsis-v');
    eachTask.appendChild(button);

    const trash = document.createElement('div');
    trash.innerHTML = `<i class="fas fa-trash-alt"></i>`
    trash.setAttribute('class', 'bin');
    eachTask.appendChild(trash);

    inputLabel.addEventListener('focus', () => {
      inputLabel.style.background= '#feeaaa';
      eachTask.style.background = '#feeaaa';
      button.style.display = 'none';
      trash.style.display = 'inline';
    });


    trash.addEventListener ('mousedown', (e) => {
      e.preventDefault();
      console.log('Remove Me');
      removeTask(each, taskList, i);
    })

    inputLabel.addEventListener('blur', () => {
      inputLabel.style.background= '#ffffff';
      eachTask.style.background = '#ffffff';
      button.style.display = 'inline';
      trash.style.display = 'none';
    });

    allTasks.appendChild(eachTask);
    const separatingLine = document.createElement('hr');
    allTasks.appendChild(separatingLine);
  }
};

insert.addEventListener('click', (e) => {
  e.preventDefault();
  addTaskList(taskList);
  displayTasks();
});

export default displayTasks;

window.onload = displayTasks();