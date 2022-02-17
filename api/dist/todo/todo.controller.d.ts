import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(body: CreateTodoDto): Promise<import("./entities/todo.entity").Todo>;
    getAll(): Promise<import("./entities/todo.entity").Todo[]>;
    findOne(id: string): Promise<import("./entities/todo.entity").Todo>;
    update(id: string, body: CreateTodoDto): Promise<import("./entities/todo.entity").Todo>;
    remove(id: string): Promise<import("./entities/todo.entity").Todo>;
}
