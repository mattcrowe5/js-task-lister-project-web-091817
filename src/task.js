/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1;
  const all = [];
  return class Task {
    constructor(description, priority, list) {
      this.description = description;
      this.priority = priority;
      this.id = id;
      if (list) {
        this.listId = list.id;
      }
      id++;
      all.push(this);
    }

    static all() {
      return all;
    }
  };
})();
