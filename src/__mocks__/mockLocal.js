let listTask = [];
const localStorageMock = {
  getItem: (key) => listTask[key] || null,
  setItem: (key, value) => {
    listTask[key] = value;
  },

  // removeItem: (key) => delete listTask[key],
  // clear:  listTask = {},
};

export default localStorageMock;