import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/book.module';
import { AuthModule } from './auth/auth.module';
import { NovelModule } from './novels/novel.module';
import { ConfigModule } from '@nestjs/config';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ReviewModule } from './review/review.module';
import { PaymentService } from './payment/payment.service';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';
//import { UserModule } from './users/user.module';
import { WishlistModule } from './wishlist/wishlist.module';
import * as dotenv from 'dotenv'; // Import dotenv
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB),
    BooksModule,
    AuthModule,
    NovelModule,
    CartModule,
    OrderModule,
    CartModule,
    ReviewModule,
    PaymentModule,
    WishlistModule,
  ],
  controllers: [AppController, PaymentController],
  providers: [AppService, PaymentService],
})
export class AppModule {}
