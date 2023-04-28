import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrderItemDto, UpdateOrderItemDto } from '../dtos/order-item.dto';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-product.entity';
import { Product } from '../../products/entities/product.entity';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(OrderItem) private orderItemRepo: Repository<OrderItem>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async create(data: CreateOrderItemDto) {
    const order = await this.orderRepo.findOne({ where: { id: data.orderId } });
    const product = await this.productRepo.findOne({
      where: { id: data.productId },
    });

    const newItem = new OrderItem();
    newItem.order = order;
    newItem.product = product;
    newItem.quantity = data.quantity;

    return this.orderItemRepo.save(newItem);
  }

  async update(id: number, changes: UpdateOrderItemDto) {
    const orderItem = await this.orderItemRepo.findOne({
      where: { id },
    });
    this.orderItemRepo.merge(orderItem, changes);
    return this.orderItemRepo.save(orderItem);
  }

  remove(id: number) {
    return this.orderItemRepo.delete(id);
  }
}
