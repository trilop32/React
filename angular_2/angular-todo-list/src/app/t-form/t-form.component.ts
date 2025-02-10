import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.css']
})
export class TodoFormComponent implements AfterViewInit {
  @Output() add = new EventEmitter<string>();
  @ViewChild('todoInput') todoInput: ElementRef | undefined; //  | undefined

  ngAfterViewInit(): void {
    if (this.todoInput) { // Проверяем, что todoInput не undefined
    this.todoInput.nativeElement.focus(); // Автофокус на поле ввода после инициализации вида
    }
  }

  onAdd() {
    if (this.todoInput) { // Проверяем, что todoInput не undefined
    const inputValue = this.todoInput.nativeElement.value;
      if (inputValue.trim() !== '') {
      this.add.emit(inputValue);
      this.todoInput.nativeElement.value = ''; // Очищаем поле ввода
      this.todoInput.nativeElement.focus();
      }
    }
  }
}