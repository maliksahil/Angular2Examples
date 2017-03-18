import { TestBed, async, inject } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                TodoService, MockBackend,
                { provide: XHRBackend, useClass: MockBackend },
            ]
        });
    });

    describe('getTodos()', () => {
        it('should return a Promise',
            inject([TodoService, XHRBackend], (todoService: TodoService, mockBackend) => {
                const mockResponse =
                    [
                        { 'id': 0, 'title': 'Steal donut truck' },
                        { 'id': 1, 'title': 'Speed on the freeway' },
                        { 'id': 2, 'title': 'Get caught by cop' }
                    ];

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                todoService.getTodos().then(response => {
                    const todos = response.json();
                    expect(todos.length).toBe(3);
                    expect(todos[0].title).toEqual('Steal donut truck');
                    expect(todos[1].title).toEqual('Speed on the freeway');
                    expect(todos[2].title).toEqual('Get caught by cop');
                });
            }));
    });
});
