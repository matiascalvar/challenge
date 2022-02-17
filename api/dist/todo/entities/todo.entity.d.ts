import { Folder } from "src/folder/entities/folder.entity";
export declare class Todo {
    id: number;
    name: string;
    completed?: boolean;
    createdAt: Date;
    folder: Folder;
}
