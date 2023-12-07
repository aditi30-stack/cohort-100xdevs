/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todos) {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    if (this.todos.length == 0) {
      console.log("No Todos left to be removed.");
    }
    if (indexOfTodo > -1) {
      this.todos.splice(indexOfTodo, 1);
    }
  }
  update(index, updatedTodo) {
    if (index >= this.todos.length) {
      return this.todos;
    }
    this.todos[index] = updatedTodo;
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.todos.length) {
      console.log("Invalid Task");
      return null;
    }
    return this.todos[indexOfTodo];
  }
  clear() {
    // Reset the array.
    this.todos = [];
  }
}

module.exports = Todo;
