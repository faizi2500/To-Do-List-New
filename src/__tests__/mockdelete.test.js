import localStorageMock from '../__mocks__/mockLocal.js';
import { removeTask, removeCompleted } from '../__mocks__/mockdelete.js';

describe('Delete One Task', () => {
  const listTask = [
    {
      id: 0,
      description: 'Wash Dishes',
      completed: false,
    },
    {
      id: 1,
      description: 'Cook Dinner',
      completed: true,
    },
    {
      id: 2,
      description: 'Read Book for 30 mins',
      completed: false,
    },
  ];

  it('delete one task', () => {
    expect(removeTask(listTask, 1)).toHaveLength(2);
  });

  it('Update local Storage after deleting', () => {
    expect(localStorageMock.getItem('taskList')).toHaveLength(2);
  });

  it('Local storage should update after delete', () => {
    expect(localStorageMock.getItem('taskList')).toBe(listTask);
  });

  it('Index should update after delete one item', () => {
    expect(listTask[1].id).toBe(2);
  });

  it('should return updated array', () => {
    expect(removeTask(listTask, 0)).toEqual([{ completed: false, description: 'Read Book for 30 mins', id: 1 }]);
  });
});

describe('Delete All Completed', () => {
  const linkTask = [
    {
      id: 1,
      description: 'Task 1',
      completed: false,
    },
    {
      id: 2,
      description: 'Task 2',
      completed: true,
    },
    {
      id: 3,
      description: 'Task 3',
      completed: true,
    },
    {
      id: 4,
      description: 'Task 4',
      completed: false,
    },
  ];

  it('Delete completed tasks', () => {
    expect(removeCompleted(linkTask)).toHaveLength(2);
  });

  it('Local storage should update after delete', () => {
    expect(localStorageMock.getItem('taskList')[1].description).toBe('Task 4');
  });

  it('Local storage should update after delete', () => {
    expect(localStorageMock.getItem('taskList')[1].id).toBe(2);
  });

  it('Index of task 0 should be 1', () => {
    expect(removeCompleted(linkTask)[0].id).toBe(1);
  });
});
