import displayTasks from './index.js'


const removeTask = (each, taskList, index) => {
  taskList.splice(each, 1);
  for(let j = 0; j < taskList.length; j++) {
    taskList[j].id = j + 1;
  }
  localStorage.setItem('taskList', JSON.stringify(taskList));
  displayTasks()
};

export default removeTask;