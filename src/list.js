/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1;
  const all = [];
  return class List {
    constructor(title) {
      this.title = title;
      this.id = id;
      all.push(this);
      id++;
      // NOTE: How can we use the private id variable to auto increment list ids🤔?
    }

    tasks() {
      return Task.all().filter(
        function(task) {
          return task.listId === this.id;
        }.bind(this)
      );
    }

    static all() {
      return all;
    }

    static findByTitle(title) {
      let listArr = List.all();
      return listArr.find(function(list) {
        return list.title === title;
      });
    }
  };
})();
