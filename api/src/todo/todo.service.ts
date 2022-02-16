import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todosRepository: Repository<Todo>,
  ) {}

  getAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    try {
      const todo = await this.todosRepository.findOneOrFail(id);
      return todo;
    } catch (e) {throw e}
  }

  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = this.todosRepository.create({ name: createTodoDto.name });
    return this.todosRepository.save(newTodo);
  }

  async update(id: number, createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = await this.findOne(id);
    todo.name = createTodoDto.name;
    return this.todosRepository.save(todo);
  }

  async remove(id: number): Promise<Todo> {
    const todo = await this.findOne(id);
    return await this.todosRepository.remove(todo)
  }
}
