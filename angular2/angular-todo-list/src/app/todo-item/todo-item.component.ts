import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined; // Добавляем | undefined
  @Output() complete = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onComplete() {
    if (this.todo) { // Проверяем, что todo не undefined
     this.complete.emit(this.todo.id);
    }
  }

  onDelete() {
    if (this.todo) { // Проверяем, что todo не undefined
      this.delete.emit(this.todo.id);
    }
  }
}