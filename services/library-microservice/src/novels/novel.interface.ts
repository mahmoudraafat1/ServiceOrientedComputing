/* eslint-disable prettier/prettier */

import { Document } from 'mongoose';

export interface Novel extends Document {
  name: string;
  author: string;
  publishyear: number;
  image: string;
  description: string;
  price: number;
}