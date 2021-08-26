import storageMock from './mockLocalStorage.js';

// const addTaskList = (taskList, input) => {
//   const inputValue = document.getElementById('task').value;
//   const description = input;
//   const completed = false;
//   if (description === '') {
//     return 'Empty Field'
//   } else {
//     const id = taskList.length + 1;
//     const task = { description, completed, id };
//     taskList.push(task);
//     // storageMock.setItem('taskObj', taskList);
//     return taskList;
//   }
// };



const addList = (taskList, form) => {
  const addTask = document.querySelector('#task');
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

export default addList