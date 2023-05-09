import { Component } from '@angular/core';
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

  // Step2 Define a todos array with some initial data to display
  todos: Todo[] = [{name: 'Read about Dependency Injection', completed: false},
  {name: 'Read about Template Syntax', completed: false}];

  // Step1 Define a newTodo string for adding new todos
  // we bind this attribute using ngModel for easy two-way data binding/updating
  newTodo: string = '';

    // Step1 Implement a method for adding new TODO items

  // Step1 Create addTodo method to add a new todo to the todos array
  addTodo() {
    // Check if newTodo is an empty or whitespace-only string
    if (this.newTodo.trim().length === 0) {
      // Exit the method early if newTodo is invalid
      return;
    }
  
    // Create a new todo object with name and completed properties
    const newTodoObj = {
      name: this.newTodo,
      completed: false,
    };
  
    // Add the new todo object to the todos array
    this.todos.push(newTodoObj);
    // Reset the value of newTodo to an empty string
    this.newTodo = '';
  }
 
  // Step3 Implement the logic for marking items as complete
  // we also use text-decoration: line-through in the css file
  complete(todo: Todo) {
    todo.completed = true;
  }

  // Step4 Implement the logic for removing items
  // removeTodo method to remove a todo from the todos array
  removeTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
