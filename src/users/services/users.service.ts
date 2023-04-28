import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { Order } from '../entities/order.entity';
import { ProductsService } from '../../products/services/products.service';
import { CustomersService } from '../../users/services/customers.service';
import config from '../../config';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private CustumerService: CustomersService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  findAll() {
    return [];
  }

  async findOne(id: number) {
    return {};
  }

  async create(data: CreateUserDto) {
    return {};
  }

  async update(id: number, changes: UpdateUserDto) {
    return {};
  }

  remove(id: number) {
    return 0;
  }

  async getOrdersByUser(id: number) {
    const user = this.findOne(id);

    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
}
