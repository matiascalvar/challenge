import { Repository } from 'typeorm';
import { CreateFolderDto } from './dto/create-folder.dto';
import { Folder } from './entities/folder.entity';
export declare class FolderService {
    private foldersRepository;
    constructor(foldersRepository: Repository<Folder>);
    getAll(): Promise<Folder[]>;
    findOne(id: number): Promise<Folder>;
    create(createFolderDto: CreateFolderDto): Promise<Folder>;
    update(id: number, createFolderDto: CreateFolderDto): Promise<Folder>;
    remove(id: number): Promise<Folder>;
}
