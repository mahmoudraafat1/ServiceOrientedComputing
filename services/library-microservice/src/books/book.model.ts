/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  publishyear: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Book extends mongoose.Document {
  id: string;
  name: string;
  author: string;
  publishyear: number;
  image: string;
  description: string;
  price: number;
}