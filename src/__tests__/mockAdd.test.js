/**
 * @jest-environment jsdom
 */

import localStorageMock from '../__mocks__/mockLocal.js';
import addTasklist from '../__mocks__/mockAdd.js';

describe('Add-Tasks', () => {
  const listTask = [];
  const item = 'Feed the dog';
  it('add-Tasks', () => {
    expect(addTasklist(listTask, item)).toHaveLength(1);
  });

  it('Update local storage after new item', () => {
    expect(localStorageMock.getItem('taskList')).toHaveLength(1);
  });

  it('Should return task array with task object', () => {
    expect(addTasklist(listTask, item)).toHaveLength(2);
  });

  it('Description should match input value - insert ', () => {
    expect(listTask[0].description).toBe('Feed the dog');
  });

  it('Completed status should be false', () => {
    expect(listTask[0].completed).toBe(false);
  });

  it('Status should be false', () => {
    expect(listTask[0].id).toBe(1);
  });

  // it('add-Tasks', () => {
  //   expect(listTask[0]).toEqual({ description: 'Feed the dog', completed: false, id: 1 });
  // });
});