## Hint for Step 1

Define a `newTodo` string property in the component for adding new todos

```typescript
newTodo: string = '';
```

Bind `newTodo` to the input field using `[(ngModel)]`

```html
<input type="text" placeholder="Add todo" [(ngModel)]="newTodo">
```

Create an `addTodo` method to add a new todo to the `todos` array

```typescript
addTodo() {
  const newTodoObj = {
    name: this.newTodo,
    completed: false,
  };
  this.todos.push(newTodoObj);
  this.newTodo = '';
}
```

## Hint for Step 2

Use the `*ngFor` directive to loop through the `todos` array and display each item

```html
<li *ngFor="let todo of todos">
  {{ todo.name }}
</li>
```

Use property binding to set the class attribute of each item to `completed` if it is marked as completed

```html
<li *ngFor="let todo of todos" [class.completed]="todo.completed">
  {{ todo.name }}
</li>
```

## Hint for Step 3

Create a `complete` method to mark a todo as completed

```typescript
complete(todo: Todo) {
  todo.completed = true;
}
```

Use the `ngClass` directive to dynamically set the class attribute of each item based on whether it is completed or not

```html
<li *ngFor="let todo of todos" [ngClass]="{'completed': todo.completed}">
  {{ todo.name }}
</li>
```

## Hint for Step 4

Create a `removeTodo` method to remove a todo from the `todos` array

```typescript
removeTodo(todo: Todo) {
  const index = this.todos.indexOf(todo);
  if (index >= 0) {
    this.todos.splice(index, 1);
  }
}
```