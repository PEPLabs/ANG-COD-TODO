import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import 'reflect-metadata';


describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should add a new todo', () => {
  //   component.newTodo = 'Learn Angular';
  //   // component.addTodo();
  //   expect(component.todos.length).toEqual(1);
  //   expect(component.todos[0].name).toEqual('Learn Angular');
  // });

  // it('should not add an empty todo', () => {
  //   component.newTodo = '';
  //   // component.addTodo();
  //   expect(component.todos.length).toEqual(0);
  // });

  // it('should mark a todo as completed', () => {
  //   component.todos.push({ name: 'Learn Angular', completed: false });
  //   const todo = component.todos[0];
  //   todo.completed = true;
  //   expect(todo.completed).toBeTrue();
  // });


  // it('should mark a todo as completed', () => {
  //   const todo = { name: 'Learn Angular', completed: false };
  //   component.todos.push(todo);
  //   // component.complete(todo);
  //   expect(todo.completed).toBeTrue();
  // });

  // it('should remove a todo', () => {
  //   component.todos.push({ name: 'Test todo', completed: false });
  //   const todo = component.todos[0];
  //   // component.removeTodo(todo);
  //   expect(component.todos.length).toEqual(0);
  // });

  
  // it('should have a method named "addTodo"', () => {
  //   expect(component.addTodo).toBeDefined();
  // });

  it('should have an addTodo method', () => {
    expect(Reflect.has(component, 'addTodo')).toBeTrue();
  });

  it('should have a removeTodo method', () => {
    expect(Reflect.has(component, 'removeTodo')).toBeTrue();
  });

  it('should have a complete method', () => {
    expect(Reflect.has(component, 'complete')).toBeTrue();
  });

});

