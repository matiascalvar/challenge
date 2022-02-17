import { FolderService } from './folder.service';
import { CreateFolderDto } from './dto/create-folder.dto';
export declare class FolderController {
    private readonly folderService;
    constructor(folderService: FolderService);
    create(body: CreateFolderDto): Promise<import("./entities/folder.entity").Folder>;
    getAll(): Promise<import("./entities/folder.entity").Folder[]>;
    findOne(id: string): Promise<import("./entities/folder.entity").Folder>;
    update(id: string, body: CreateFolderDto): Promise<import("./entities/folder.entity").Folder>;
    remove(id: string): Promise<import("./entities/folder.entity").Folder>;
}
