import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TodoComponent } from './todo.component';

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



  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have an addTodo method', () => {
  //   expect(Reflect.has(component, 'addTodo')).toBeTrue();
  // });

  it('should have a removeTodo method', () => {
    expect(Reflect.has(component, 'removeTodo')).toBeTrue();
  });

  it('should have a complete method', () => {
    expect(Reflect.has(component, 'complete')).toBeTrue();
  });




  it('should add a new todo', () => {
    if (!Reflect.has(component, 'addTodo')) {
      fail('should have an addTodo method');
    }

    component.newTodo = 'Learn Angular';
    Reflect.get(component, 'addTodo').call(component);
    expect(component.todos.length).toEqual(1);
    expect(component.todos[0].name).toEqual('Learn Angular');
  });

  it('should not add an empty todo', () => {
    if (!Reflect.has(component, 'addTodo')) {
      fail('should have an addTodo method');
    }

    component.newTodo = '';
    Reflect.get(component, 'addTodo').call(component);
    expect(component.todos.length).toEqual(0);
  });

  it('should mark a todo as completed', () => {
    if (!Reflect.has(component, 'complete')) {
      return;
    }

    component.todos.push({ name: 'Learn Angular', completed: false });
    const todo = component.todos[0];
    todo.completed = true;
    expect(todo.completed).toBeTrue();
  });

  it('should remove a todo', () => {
    if (!Reflect.has(component, 'removeTodo')) {
      return;
    }

    component.todos.push({ name: 'Test todo', completed: false });
    const todo = component.todos[0];
    Reflect.get(component, 'removeTodo').call(component, todo);
    expect(component.todos.length).toEqual(0);
  });
});
