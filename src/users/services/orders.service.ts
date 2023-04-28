import { Injectable, NotFoundException } from '@nestjs/common';

import { Order } from '../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class OrdersService {
  findAll() {
    return [];
  }

  async findOne(id: number) {
    return {};
  }

  async create(data: CreateOrderDto) {
    return {};
  }

  async update(id: number, changes: UpdateOrderDto) {
    return {};
  }

  remove(id: number) {
    return 0;
  }
}
