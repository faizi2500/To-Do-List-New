/* eslint-disable import/no-cycle */

import displayTasks from './index.js';

const addTaskList = (taskList, form) => {
  const addTask = form.getElementById('task');
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
    return taskList;
  }
  form.reset();
};

export default addTaskList;
