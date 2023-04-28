import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private custumerRepo: Repository<Customer>,
  ) {}

  findAll() {
    return this.custumerRepo.find();
  }

  async findOne(id: number) {
    const customer = await this.custumerRepo.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(data: CreateCustomerDto) {
    const newCustumer = this.custumerRepo.create(data);
    return this.custumerRepo.save(newCustumer);
  }

  async update(id: number, changes: UpdateCustomerDto) {
    const custumer = await this.custumerRepo.findOneBy({ id });
    this.custumerRepo.merge(custumer, changes);
    return this.custumerRepo.save(custumer);
  }

  remove(id: number) {
    return this.custumerRepo.delete(id);
  }
}
