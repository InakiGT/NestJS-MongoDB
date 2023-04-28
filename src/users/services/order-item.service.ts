import { Injectable } from '@nestjs/common';

import { CreateOrderItemDto, UpdateOrderItemDto } from '../dtos/order-item.dto';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-product.entity';
import { Product } from '../../products/entities/product.entity';

@Injectable()
export class OrderItemService {
  async create(data: CreateOrderItemDto) {
    return {};
  }

  async update(id: number, changes: UpdateOrderItemDto) {
    return {};
  }

  remove(id: number) {
    return 0;
  }
}
