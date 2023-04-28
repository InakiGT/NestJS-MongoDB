import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
  findAll() {
    return [];
  }

  async findOne(id: number) {
    return {};
  }

  create(data: CreateCustomerDto) {
    return {};
  }

  async update(id: number, changes: UpdateCustomerDto) {
    return {};
  }

  remove(id: number) {
    return 0;
  }
}
