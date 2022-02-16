import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { Folder } from './entities/folder.entity';

@Injectable()
export class FolderService {
  constructor(
    @InjectRepository(Folder) private foldersRepository: Repository<Folder>,
  ) {}

  getAll(): Promise<Folder[]> {
    return this.foldersRepository.find({relations:['todos']});
  }

  async findOne(id: number): Promise<Folder> {
    try {
      const folder = await this.foldersRepository.findOneOrFail(id, {
        relations: ['todos'],
      });
      return folder;
    } catch (e) {throw e}
  }

  async create(createFolderDto: CreateFolderDto): Promise<Folder> {
    const newFolder = this.foldersRepository.create({ name: createFolderDto.name });
    return this.foldersRepository.save(newFolder);
  }

  async update(id: number, createFolderDto: CreateFolderDto): Promise<Folder> {
    const folder = await this.findOne(id);
    folder.name = createFolderDto.name;
    return this.foldersRepository.save(folder);
  }

  async remove(id: number): Promise<Folder> {
    const folder = await this.findOne(id);
    return await this.foldersRepository.remove(folder)
  }
}
