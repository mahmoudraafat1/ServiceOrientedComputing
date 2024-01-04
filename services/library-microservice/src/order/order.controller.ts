import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderService } from './order.service';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'place-order' })
  async placeOrder(data: { userId: string; bookIds: string[] }): Promise<void> {
    const { userId, bookIds } = data;
    await this.orderService.placeOrder({ userId, bookIds });
  }

  @Get()
  async getAllOrders(): Promise<any[]> {
    return this.orderService.getAllOrders();
  }
  
  @Get(':userId')
  async getOrder(@Param('userId') userId: string): Promise<any> {
    return this.orderService.getOrder(userId);
  }

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<void> {
    await this.orderService.placeOrder(createOrderDto);
  }

  @Put(':orderId')
  async updateOrder(@Param('orderId') orderId: string, @Body() updateOrderDto: UpdateOrderDto): Promise<void> {
    await this.orderService.updateOrder(orderId, updateOrderDto);
  }

  @Delete(':orderId')
  async deleteOrder(@Param('orderId') orderId: string): Promise<void> {
    await this.orderService.deleteOrder(orderId);
  }
}
