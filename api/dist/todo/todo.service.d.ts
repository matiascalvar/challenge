import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { Folder } from 'src/folder/entities/folder.entity';
export declare class TodoService {
    private todosRepository;
    private foldersRepository;
    constructor(todosRepository: Repository<Todo>, foldersRepository: Repository<Folder>);
    getAll(): Promise<Todo[]>;
    findOne(id: number): Promise<Todo>;
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    update(id: number, body: CreateTodoDto): Promise<Todo>;
    remove(id: number): Promise<Todo>;
}
