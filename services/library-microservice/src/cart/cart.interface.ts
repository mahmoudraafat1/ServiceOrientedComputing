/* eslint-disable prettier/prettier */

import { Document } from 'mongoose';

export interface Cart extends Document {
  userId: string;
  items: Item[];
  // Add other cart-specific properties
}

export interface Item {
  productId: string;
  quantity: number;
  // Add other item-related properties
}
