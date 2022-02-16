import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { FolderModule } from './folder/folder.module';
import { Todo } from './todo/entities/todo.entity';
import { Folder } from './folder/entities/folder.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // shouldn't be used in production - may lose data
      entities: [Todo, Folder], //entity:['dist/src/**/*.entity.js'] for production
    }),
    TodoModule,
    FolderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
