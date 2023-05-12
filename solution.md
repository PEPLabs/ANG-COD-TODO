# Solution 

 ## `todo.component.html` 

 <details>
<summary>Click to view the template solution</summary>

```html
<div class="todo">
  <!-- Step 1 Implement a form for adding new TODO items -->
  <div>
    <!-- use data binding to bind the newTodo property to the input field -->
    <input type="text" placeholder="Add todo" [(ngModel)]="newTodo" (keyup.enter)="addTodo()">
    <button (click)="addTodo()">Add</button>
  </div>

  <!-- Step 2 Use html tags to display the list of TODO items -->
  <ul>
    <!-- Step 2 Use the *ngFor directive to loop through the todos array -->
    <li *ngFor="let todo of todos; let i = index" [class.completed]="todo.completed">

      <!-- Step 3 Use data binding to bind the todo.completed property to the checkbox input, allowing us to mark items as complete -->
      <label>
        <input type="checkbox" [(ngModel)]="todo.completed">
        <span>{{todo.name}}</span>
      </label>

      <!-- Step 4 Add a button with a click event to remove the todo using the removeTodo method-->
      <button (click)="removeTodo(todo)">Delete</button>
    </li>
  </ul>

</div>
```
</details>


<br>
<br>

## `todo.component.ts`

<details>
<summary>Click to view the component solution</summary>

```typescript
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

  // Step 1 Define a newTodo string for adding new todos
  // we bind this attribute using ngModel for easy two-way data binding/updating
  newTodo: string = '';

  // Step 2 Define a todos array with some initial data to display
  todos: Todo[] = [{name: 'Read about Dependency Injection', completed: false},
  {name: 'Read about Template Syntax', completed: false}];

  // Step 1 Create addTodo method to add a new todo to the todos array
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
 
  // Step 3 Implement the logic for marking items as complete
  // we also use text-decoration: line-through in the css file
  complete(todo: Todo) {
    todo.completed = true;
  }

  // Step 4 Implement the logic for removing items
  // removeTodo method to remove a todo from the todos array
  removeTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}

```
</details>






