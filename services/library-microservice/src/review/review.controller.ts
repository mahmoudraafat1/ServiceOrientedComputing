/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './review.dto';
import { Review } from './review.interface';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) { }

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    try {
      return await this.reviewService.create(createReviewDto);
    } catch (error) {
      throw new InternalServerErrorException('Error saving review');
    }
  }

  @Get(':id')
  async findByBookId(@Param('bookId') bookId: string): Promise<Review[]> {
    try {
      return await this.reviewService.findByBookId(bookId);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching reviews');
    }
  }

  @Get('/:userId/:bookId')
  async findByUserIdAndBookId(
    @Param('userId') userId: string,
    @Param('bookId') bookId: string
  ): Promise<Review> {
    try {
      const review = await this.reviewService.findByUserIdAndBookId(
        userId,
        bookId
      );
      if (!review) {
        throw new NotFoundException('Review not found');
      }
      return review;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching review');
    }
  }

  //@Delete('/:reviewId')
  //async remove(@Param('reviewId') reviewId: string): Promise<Review> {
  //  try {
  //    const deletedReview = await this.reviewService.remove(reviewId);
  //    if (!deletedReview) {
  //      throw new NotFoundException('Review not found');
  //    }
  //    return deletedReview;
  //  } catch (error) {
  //    throw new InternalServerErrorException('Error deleting review');
  //  }
  //}
}
