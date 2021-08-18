import './style.css';

const completedStatus = (check, item) => {
  console.log(item);
  if (check.checked) {
    check.nextElementSibling.style.textDecoration = 'line-through';
    item.completed = true;
  }
  else {
    item.completed = false;
    check.nextElementSibling.style.textDecoration = 'none';
  }
  console.log(taskList);
}

export default completedStatus;