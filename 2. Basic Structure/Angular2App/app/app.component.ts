import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <b>Hello {{name}}</b><br/>
    <ul>
        <li *ngFor="let hobby of hobbies;let i = index">
            {{i}}. {{hobby.id}}: {{hobby.name}}
        </li>
    </ul>
    `
})
export class AppComponent {
    name: string;
    private hobbies: Hobby[] = [
        { "id": 1, "name": "Facebook" },
        { "id": 2, "name": "Reddit" },
        { "id": 3, "name": "Twitter" }
    ]
    constructor() {
        this.name = "Sahil";
    }
}

interface Hobby {
    id: number,
    name: string
}