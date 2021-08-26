// remove one task.
import localStorageMock from './mockLocal.js';
const removeTask = (taskList, index) => {
  taskList.splice(index, 1);
  for (let j = 0; j < taskList.length; j += 1) {
    taskList[j].id = j + 1;
  };
  localStorageMock.setItem('taskList', taskList);
  return taskList;
};
export default removeTask;
// remove one task.