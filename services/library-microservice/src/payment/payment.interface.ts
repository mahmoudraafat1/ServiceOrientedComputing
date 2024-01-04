/* eslint-disable prettier/prettier */

import { Document } from 'mongoose';

export interface payment extends Document {
  novelId: number;
  paymentMethod: string;
  amount: number;
  paymentDate: Date;
}

