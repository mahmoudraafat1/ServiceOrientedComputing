import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartSchema } from './cart.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartsModule {}
