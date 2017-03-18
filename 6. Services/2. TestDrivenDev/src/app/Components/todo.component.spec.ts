import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { Todo } from '../BusinessObjects';
import { TodoComponent } from './todo.component';
import { TodoService } from '../Services/todo.service';

describe('TodoComponent', () => {
    const expectedTodo = new Todo({ 'id': 0, 'title': 'Test Todo' });
    let fixture = null;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoComponent],
        }).compileComponents(); // compile template and css
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoComponent);
        const todoComponent = fixture.componentInstance;

        todoComponent.todo = expectedTodo;
        fixture.detectChanges();
    });

    // This test demonstrates testing Inputs
    it('should display test todo', () => {
        const todoElement = fixture.debugElement;
        expect(todoElement.nativeElement.textContent).toContain(expectedTodo.title);
    });

    // // this shows how to test outputs
    // it('should raise selected event when clicked', () => {
    //     const todoElement = fixture.debugElement;
    //     let selectedTodo: Todo = null;
    //     todoElement.todoChange.subscribe((todo: Todo) => selectedTodo = todo);
    //     todoElement.checkBoxSelected(todoElement);   // triggerEventHandler helper
    //     expect(selectedTodo).toBe(expectedTodo);
    // });
});
