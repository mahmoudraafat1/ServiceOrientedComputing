import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {  Payment} from './payment.model';


@Injectable()
export class PaymentService {
    constructor(@Inject('paymentModel') private readonly paymentModel: Model<Payment>) {}

  async create(user: Payment): Promise<Payment> {
    const newUser = new this.paymentModel(user);
    return await newUser.save();
  }

  async findAll(): Promise<Payment[]> {
    return await this.paymentModel.find().exec();
  }

  async findOne(id: string): Promise<Payment> {
    return await this.paymentModel.findById(id).exec();
  }

  async update(id: string, Payment: Payment): Promise<Payment> {
    return await this.paymentModel.findByIdAndUpdate(id, Payment, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.paymentModel.deleteOne({ _id: id }).exec();
  }
}
