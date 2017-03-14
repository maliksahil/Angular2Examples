export class Todo {
    public id: number;
    public title: string;
    constructor(todo?:Todo) {
        Object.assign(this, todo);
    }
}