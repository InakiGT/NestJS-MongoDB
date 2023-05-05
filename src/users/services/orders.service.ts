import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { Order } from '../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}
  findAll() {
    return this.orderModel
      .find()
      .populate('products')
      .populate('customer')
      .exec();
  }

  async findOne(id: string) {
    const order = await this.orderModel
      .findById(id)
      .populate('customer')
      .populate('products')
      .exec();

    if (!order) {
      throw new NotFoundException(`Order ${id} not found`);
    }

    return order;
  }

  async create(data: CreateOrderDto) {
    const newOrder = new this.orderModel(data);
    return await newOrder.save();
  }

  async update(id: string, changes: UpdateOrderDto) {
    const order = this.orderModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!order) {
      throw new NotFoundException(`Order ${id} not found`);
    }
    return order;
  }

  remove(id: string) {
    return this.orderModel.findByIdAndDelete(id);
  }

  async removeProduct(id: string, productId: string) {
    console.log(productId);
    const order = await this.orderModel.findById(id);
    await order.products.pull(productId);
    return order.save();
  }

  async addProducts(id: string, productsId: string[]) {
    const order = await this.orderModel.findById(id);
    await order.products.push(productsId);
    return order.save();
  }
}
