/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
      // Add other item properties here
    }
  ],
  // Add other cart-specific properties here
});

export interface Cart extends mongoose.Document {
  id: string;
  userId: string;
  items: Item[];
  // Add other cart properties here
}

export interface Item {
  productId: string;
  quantity: number;
  // Add other item properties here
}
