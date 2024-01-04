/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const PaymentSchema = new mongoose.Schema({
  novelId: { type: Number,  required: true },
  paymentMethod: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
});

export interface Payment extends mongoose.Document {
  id: string;
  novelId: number;
  paymentMethod: string;
  amount: number;
  paymentDate: Date;
}
