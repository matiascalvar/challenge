import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FolderService } from './folder.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';

@Controller('folder')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @Post()
  create(@Body() body: CreateFolderDto) {
    return this.folderService.create(body);
  }

  @Get()
  getAll() {
    return this.folderService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.folderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: CreateFolderDto) {
    return this.folderService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.folderService.remove(+id);
  }
}
