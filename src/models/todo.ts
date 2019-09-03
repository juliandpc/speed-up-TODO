interface ITodo {
    id: string;
    title: string;
    body: string;
    createdAt: Date;
}

class Todo implements ITodo {
    readonly id: string;
    title: string;
    body: string;
    createdAt: Date;
}