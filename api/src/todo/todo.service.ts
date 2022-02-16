import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { getConnection } from 'typeorm';
import { Folder } from 'src/folder/entities/folder.entity';
@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todosRepository: Repository<Todo>,
    @InjectRepository(Folder) private foldersRepository: Repository<Folder>
  ) {}

  getAll(): Promise<Todo[]> {
    return this.todosRepository.find({ relations: ['folder'] });
  }

  async findOne(id: number): Promise<Todo> {
    try {
      const todo = await this.todosRepository.findOneOrFail(id);
      return todo;
    } catch (e) {throw e}
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = this.todosRepository.create({
      name: createTodoDto.name
    });
    
    const folder = await this.foldersRepository.findOneOrFail(createTodoDto.folderId)
    newTodo.folder = folder
    
    await this.todosRepository.save(newTodo);
    return newTodo
  }

  async update(id: number, body: CreateTodoDto): Promise<Todo> {
    const todo = await this.findOne(id);
    if (body.name) todo.name = body.name;
    if (body.completed) todo.completed = !todo.completed;
    return this.todosRepository.save(todo);
  }

  async remove(id: number): Promise<Todo> {
    const todo = await this.findOne(id);
    return await this.todosRepository.remove(todo)
  }
}
