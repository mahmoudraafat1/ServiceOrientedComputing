import { Document } from 'mongoose';

export interface Order extends Document{
    userId: string;
    bookIds: string[];
  }
  