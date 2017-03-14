export class Todo {
    public id: number;
    public title: string;
    public isComplete = false;
    constructor(todo?:Todo) {
        Object.assign(this, todo);
    }
}