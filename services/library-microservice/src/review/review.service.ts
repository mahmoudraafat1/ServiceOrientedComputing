/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from './review.interface';
import { CreateReviewDto } from './review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel('Review') private readonly reviewModel: Model<Review>
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const createdReview = new this.reviewModel(createReviewDto);
    return createdReview.save();
  }

  async findByBookId(bookId: string): Promise<Review[]> {
    return this.reviewModel.find({ book: bookId }).populate('user').exec();
  }

  async findByUserIdAndBookId(userId: string, bookId: string): Promise<Review> {
    return this.reviewModel
      .findOne({ user: userId, book: bookId })
      .populate('user')
      .populate('book')
      .exec();
  }

  //async remove(reviewId: string): Promise<Review> {
  //  return this.reviewModel.findByIdAndDelete(reviewId).exec();
 // }
}
