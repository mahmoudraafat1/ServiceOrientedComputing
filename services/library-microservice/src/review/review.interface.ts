/* eslint-disable prettier/prettier */

import { Document, Schema } from 'mongoose';

export interface Review extends Document {
  user: Schema.Types.ObjectId;
  book: Schema.Types.ObjectId;
  comment: string;
}
