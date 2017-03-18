import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo.component';
import { TodoService } from '../Services/todo.service';

describe('TodosComponent', () => {
    let fixture = null;
    let todoComponent = null;
    let todoService = null;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TodosComponent,
                TodoComponent
            ],
            providers: [TodoService],
            imports: [HttpModule],
        }).compileComponents();

        fixture = TestBed.createComponent(TodosComponent);
        todoComponent = fixture.debugElement.componentInstance;
        todoService = fixture.debugElement.injector.get(TodoService);
    }));

    it('should create the todo component', async(() => {
        expect(todoComponent).toBeTruthy();
    }));

    it('should show todos after getTodos promise (async)', fakeAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            tick();
            fixture.detectChanges();
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('todo-control').textContent).toContain('0. Steal donut truck');
        });
    }));
});
