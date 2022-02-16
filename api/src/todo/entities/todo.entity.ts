import { Folder } from "src/folder/entities/folder.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('todo', {orderBy: {id: "ASC"}})
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ default: false })
  completed?: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne((type) => Folder, (folder) => folder.todos, {
    onDelete: 'CASCADE',
  })
  folder: Folder;
}
