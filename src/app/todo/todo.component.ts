import { Component } from '@angular/core';

// define the Todo interface
interface Todo {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  // define the todos array with some initial data
  todos: Todo[] = [];

  // define a newTodo string for adding new todos
  newTodo: string = '';

  // addTodo method to add a new todo to the todos array
  // addTodo() {
  //   if (this.newTodo.trim().length === 0) {
  //     return;
  //   }
  //   this.todos.push({
  //     name: this.newTodo,
  //     completed: false,
  //   });
  //   this.newTodo = '';
  // }

  // removeTodo method to remove a todo from the todos array
  removeTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
 
  // complete method to mark a todo as completed
  complete(todo: Todo) {
    todo.completed = true;
  }
}
