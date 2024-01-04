import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private readonly orderModel: Model<Order>) {}

  async getAllOrders(): Promise<Order[]> {
    const orders = await this.orderModel.find().exec();
    return orders;
  }
  
  async placeOrder(createOrderDto: CreateOrderDto): Promise<void> {
    const order = new this.orderModel(createOrderDto);
    await order.save();
    console.log(`Placing order for user ${createOrderDto.userId} with books: ${createOrderDto.bookIds}`);
  }

  async getOrder(userId: string): Promise<Order> {
    const order = await this.orderModel.findOne({ userId }).exec();
    if (!order) {
      throw new NotFoundException(`Order for user ${userId} not found`);
    }
    return order;
  }

  async updateOrder(orderId: string, updateOrderDto: UpdateOrderDto): Promise<void> {
    const order = await this.orderModel.findByIdAndUpdate(orderId, updateOrderDto, { new: true }).exec();
    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }
    console.log(`Updating order ${orderId} for user ${order.userId} with books: ${order.bookIds}`);
  }

  async deleteOrder(orderId: string): Promise<void> {
    const order = await this.orderModel.findByIdAndDelete(orderId).exec();
    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }
    console.log(`Deleting order ${orderId}`);
  }
}
