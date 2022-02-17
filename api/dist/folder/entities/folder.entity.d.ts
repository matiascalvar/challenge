import { Todo } from 'src/todo/entities/todo.entity';
export declare class Folder {
    id: number;
    name: string;
    createdAt: Date;
    todos: Todo[];
}
