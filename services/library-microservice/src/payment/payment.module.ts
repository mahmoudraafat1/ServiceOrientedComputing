import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema, } from './payment.model'; // Import the schema




@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'payment', schema: PaymentSchema }]), // Provide ItemModel
  ],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class paymentModule {}
