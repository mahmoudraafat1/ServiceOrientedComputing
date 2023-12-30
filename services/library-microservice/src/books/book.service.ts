/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './book.interface';
import { CreateBookDto, UpdateBookDto } from './book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdbook = new this.bookModel(createBookDto);
    return createdbook.save();
  }

  async update(
    id: string,
    updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, updateBookDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Book> {
    return this.bookModel.findOneAndDelete({ _id: id });
  }
}