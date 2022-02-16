import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { Folder } from './entities/folder.entity';

@Injectable()
export class FolderService {
  constructor(
    @InjectRepository(Folder) private foldersRepository: Repository<Folder>,
  ) {}

  getAll(): Promise<Folder[]> {
    return this.foldersRepository.find();
  }

  async findOne(id: number): Promise<Folder> {
    try {
      const todo = await this.foldersRepository.findOneOrFail(id);
      return todo;
    } catch (e) {throw e}
  }

  create(createFolderDto: CreateFolderDto): Promise<Folder> {
    const newFolder = this.foldersRepository.create({ name: createFolderDto.name });
    return this.foldersRepository.save(newFolder);
  }

  async update(id: number, createFolderDto: CreateFolderDto): Promise<Folder> {
    const todo = await this.findOne(id);
    todo.name = createFolderDto.name;
    return this.foldersRepository.save(todo);
  }

  async remove(id: number): Promise<Folder> {
    const todo = await this.findOne(id);
    return await this.foldersRepository.remove(todo)
  }
}
