/**
 * @jest-environment jsdom
 */

import addList from '../__mocks__/mockAdd';
// import storageMock from '../__mocks__/mockLocalStorage';
import dom from '../__mocks__/DOM'
test ('It is working', ()=>{
  dom()
  const form = document.querySelector('form')

  const tasks = [{}, {}];
  // const completed  = false; 
  // const id = tasks.length + 1;
  const addTask = document.querySelector('#task');
  addTask.value = 'It should be a string';
  addList(tasks, form);
  expect(tasks).toHaveLength(3)
});
