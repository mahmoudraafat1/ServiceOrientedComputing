import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'place-order' })
  async placeOrder(data: { userId: string; bookIds: string[] }): Promise<void> {
    const { userId, bookIds } = data;
    await this.orderService.placeOrder(userId, bookIds);
  }
}
