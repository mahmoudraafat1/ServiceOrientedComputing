import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  private cartItems: Map<string, string[]> = new Map();

  async addToCart(userId: string, bookId: string): Promise<void> {
    if (!this.cartItems.has(userId)) {
      this.cartItems.set(userId, []);
    }
    const userCart = this.cartItems.get(userId);
    userCart.push(bookId);
  }
}
