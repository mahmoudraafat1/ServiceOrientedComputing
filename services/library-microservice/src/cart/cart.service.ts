/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, Item } from './cart.interface';
import { CreateCartDto, UpdateCartDto } from './cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectModel('Cart') private readonly cartModel: Model<Cart>,
  ) {}

  async findAll(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }

  async findOne(id: string): Promise<Cart> {
    return this.cartModel.findById(id).exec();
  }

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const createdCart = new this.cartModel(createCartDto);
    return createdCart.save();
  }

  async update(
    id: string,
    updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    return this.cartModel.findByIdAndUpdate(id, updateCartDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Cart> {
    return this.cartModel.findOneAndDelete({ _id: id });
  }
}
