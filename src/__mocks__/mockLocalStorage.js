function storageMock() {
  let storage = {};
  return {
    setItem: (key, value) => {
      storage[key] = value || '';
    },
    getItem: (key) => {
      return key in storage ? storage[key] : null;
    },
    // removeItem: function(key) {
    //   delete storage[key];
    // },
    // get length() {
    //   return Object.keys(storage).length;
    // },
  };
}

export default storageMock
