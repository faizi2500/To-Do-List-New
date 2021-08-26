import localStorageMock from '../__mocks__/mockLocal.js';
import removeTask from '../__mocks__/mockdelete.js';
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
  })
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
    expect(removeTask(listTask, 0)).toEqual([{"completed": false, "description": "Read Book for 30 mins", "id": 1}])
  })
})