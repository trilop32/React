import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './t-form.component';

describe('TFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
