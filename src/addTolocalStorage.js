const addToStorage = (taskList) => localStorage.setItem('taskList', JSON.stringify(taskList)) 

export default addToStorage