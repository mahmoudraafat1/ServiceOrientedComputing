import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Order as OrderInterface } from './order.interface';

@Schema()
export class Order extends Document implements OrderInterface {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: [String], required: true })
  bookIds: string[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
