/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel } from './novel.interface';
import { CreateNovelDto, UpdateNovelDto } from './novel.dto';

@Injectable()
export class NovelService {
  constructor(
    @InjectModel('Novel') private readonly novelModel: Model<Novel>,
  ) {}

  async findAll(): Promise<Novel[]> {
    return this.novelModel.find().exec();
  }

  async findOne(id: string): Promise<Novel> {
    return this.novelModel.findById(id).exec();
  }

  async create(createNovelDto: CreateNovelDto): Promise<Novel> {
    const creatednovel = new this.novelModel(createNovelDto);
    return creatednovel.save();
  }

  async update(
    id: string,
    updateNovelDto: UpdateNovelDto,
  ): Promise<Novel> {
    return this.novelModel.findByIdAndUpdate(id, updateNovelDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Novel> {
    return this.novelModel.findOneAndDelete({ _id: id });
  }
}