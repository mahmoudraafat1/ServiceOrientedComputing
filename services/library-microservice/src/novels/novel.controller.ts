/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { NovelService } from './novel.service';
import { CreateNovelDto, UpdateNovelDto } from './novel.dto';

@Controller('novels')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Get()
  findAll() {
    return this.novelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novelService.findOne(id);
  }

  @Post()
  create(@Body() createNovelDto: CreateNovelDto) {
    return this.novelService.create(createNovelDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNovelDto: UpdateNovelDto) {
    return this.novelService.update(id, updateNovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelService.remove(id);
  }
}
