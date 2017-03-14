export class Todo {
    public id: number;
    public title: string;
    public rowState:string;
    constructor(todo?: Todo) {
        Object.assign(this, todo);
        this.rowState = "ADDED";
    }
}