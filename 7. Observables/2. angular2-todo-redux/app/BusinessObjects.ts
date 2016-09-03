export class Todo {
    constructor(
        public id: number,
        public title: string,
        public state: ROWSTATE = ROWSTATE.NEW,
        public details: Detail[]
    ) { }
}

export class Detail {
    constructor(
        public key: string,
        public value: any
    ) { }
}

export enum ROWSTATE {
    NEW,
    MODIFIED,
    DELETED
}