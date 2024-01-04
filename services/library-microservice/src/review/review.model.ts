/* eslint-disable prettier/prettier */
import { Schema, Document, model } from 'mongoose';

export const ReviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
  comment: {
    type: String,
    required: true,
  },
});

export interface Review extends Document {
  user: Schema.Types.ObjectId;
  book: Schema.Types.ObjectId;
  comment: string;
}

export const ReviewModel = model<Review>('Review', ReviewSchema);
