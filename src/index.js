/* eslint-disable import/no-cycle */

import './style.css';
import completedStatus from './complete.js';
import addTaskList from './add-to-list.js';
import removeTask from './remove.js';
import addToStorage from './addTolocalStorage.js'
// import { templateSettings } from 'lodash';

const allTasks = document.getElementById('all-tasks');
const insert = document.getElementById('enter-task');
const removeAll = document.getElementById('all-completed');

let taskList = [];

const getData = () => {
  if (localStorage.getItem('taskList') !== null) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  }
};

const displayTasks = () => {
  if (localStorage.getItem('taskList') !== null) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
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
      trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
      trash.setAttribute('class', 'bin');
      eachTask.appendChild(trash);
      inputLabel.addEventListener('focus', () => {
        inputLabel.style.background = '#feeaaa';
        eachTask.style.background = '#feeaaa';
        button.style.display = 'none';
        trash.style.display = 'inline';
      });
      /* eslint-disable */
      trash.addEventListener('mousedown', () => {
        removeTask(taskList, i);
      });
      /* eslint-enable */
      inputLabel.addEventListener('blur', () => {
        inputLabel.style.background = '#ffffff';
        eachTask.style.background = '#ffffff';
        button.style.display = 'inline';
        trash.style.display = 'none';
        each.description = inputLabel.value;
        addToStorage(taskList)
      });
      allTasks.appendChild(eachTask);
      const separatingLine = document.createElement('hr');
      allTasks.appendChild(separatingLine);
    }
  } else {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    getData();
  }
};

removeAll.addEventListener('click', () => {
  taskList = taskList.filter((task) => !task.completed);
  let reset = 0;
  taskList.forEach((task) => {
    reset += 1;
    task.id = reset;
  });
  localStorage.setItem('taskList', JSON.stringify(taskList));
  displayTasks();
});

insert.addEventListener('click', (e, taskList) => {
  if (localStorage.getItem('taskList') !== null) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  }
  e.preventDefault();
  addTaskList(taskList);
});

export default displayTasks;

window.onload = displayTasks();
