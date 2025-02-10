import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  imports:[TodoFormComponent,TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  todos: Todo[] = [
    { id: 1, text: 'Изучить Angular', completed: false },
    { id: 2, text: 'Создать ToDo List', completed: true }
  ];

  nextId: number = 4;

  addTodo(text: string) {
    this.todos.push({
      id: this.nextId++,
      text: text,
      completed: false
    });
  }

  completeTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  deleteCompletedTodos() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}
