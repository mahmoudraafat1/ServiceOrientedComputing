import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CartService } from './cart.service';

@Controller()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @MessagePattern({ cmd: 'add-to-cart' })
  async addToCart(data: { userId: string; bookId: string }): Promise<void> {
    const { userId, bookId } = data;
    await this.cartService.addToCart(userId, bookId);
  }
}
