/* eslint-disable import/no-cycle */

import displayTasks from './index.js';
import addToStorage from './addToLocalStorage.js'

const addTask = document.getElementById('task');
const form = document.getElementById('my-form');

const addTaskList = (taskList) => {
  const description = addTask.value;
  const completed = false;
  if (description === '') {
    addTask.setAttribute('required', '');
    addTask.style.border = 'thin solid red';
  } else {
    const id = taskList.length + 1;
    const task = { description, completed, id };
    taskList.push(task);
    addTask.style.border = 'thin solid black';
    addToStorage(taskList);
    displayTasks();
  }
  form.reset();
};

export default addTaskList;
