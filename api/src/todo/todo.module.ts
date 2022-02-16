import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { FolderService } from 'src/folder/folder.service';
import { Folder } from 'src/folder/entities/folder.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo, Folder])
  ],
  controllers: [TodoController],
  providers: [TodoService, FolderService]
})
export class TodoModule {}
