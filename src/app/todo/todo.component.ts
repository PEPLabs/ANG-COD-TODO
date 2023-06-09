import { Component } from '@angular/core';

// Step1 Create a model/structure for your Todo objects. Should have name, and completed properties. 

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {


  // Step1 Define a newTodo string for adding new todos
  // we will bind this attribute in the todo.component.html using ngModel for easy two-way data binding/updating

  // Step2 Define a todos array with some initial data to display

  // Step1 Createa method called addTodo to add a new todo to the todos array
    // a. Check if newTodo is an empty or whitespace-only string. Exit the method early if newTodo is invalid
    // b. Create a new todo object with name and completed properties
    // c. Add the new todo object to the todos array
    // d. Reset the value of newTodo to an empty string
  
  // Step3 Implement the logic for marking items as complete
  // we also use text-decoration: line-through in the css file

  // Step4 Implement the logic for removing items
  // removeTodo method to remove a todo from the todos array
}
