import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  findAll() {
    return this.customerModel.find().exec();
  }

  async findOne(id: string) {
    const customer = await this.customerModel.findById(id).exec();

    if (!customer) {
      throw new NotFoundException(`Brand ${id} not found`);
    }

    return customer;
  }

  async create(data: CreateCustomerDto) {
    const newCustomer = new this.customerModel(data);
    return await newCustomer.save();
  }

  async update(id: string, changes: UpdateCustomerDto) {
    const customer = this.customerModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }

  remove(id: string) {
    return this.customerModel.findByIdAndDelete(id);
  }
}
