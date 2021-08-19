import './style.css';

const completedStatus = (item, taskList) => {
  // if (check.checked) {
  //   check.nextElementSibling.style.textDecoration = "line-through";
  //   item.completed = true;
  // }
  // else {
  //   check.nextElementSibling.style.textDecoration = "none";
  //   item.completed = false;
  // }
  // localStorage.setItem("taskList", JSON.stringify(taskList));
  item.completed = !item.completed;
  localStorage.setItem("taskList", JSON.stringify(taskList));
  taskList = JSON.parse(localStorage.getItem('taskList'));
}

export default completedStatus;
