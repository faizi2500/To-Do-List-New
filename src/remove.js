/* eslint-disable import/no-cycle */

import displayTasks from './index.js';
import addToStorage from './addToLocalStorage.js';

const removeTask = (taskList, index) => {
  taskList.splice(index, 1);
  for (let j = 0; j < taskList.length; j += 1) {
    taskList[j].id = j + 1;
  }
  addToStorage(taskList);
  displayTasks();
};

export default removeTask;