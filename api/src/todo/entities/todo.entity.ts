import { Folder } from "src/folder/entities/folder.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('todo')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;
    
    @Column({default:false})
    completed?: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ManyToOne(() => Folder, (folder) => folder.todos)
    folder: Folder;
}
