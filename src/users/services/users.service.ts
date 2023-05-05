import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProductsService } from '../../products/services/products.service';
import config from '../../config';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    @InjectModel(User.name) private userModel: Model<User>,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException(`Brand ${id} not found`);
    }

    return user;
  }

  async create(data: CreateUserDto) {
    const hashPassword = await bcrypt.hash(data.password, 10);
    const newUser = new this.userModel(data);
    newUser.password = hashPassword;

    const model = await newUser.save();
    const { password, ...rta } = model.toJSON();

    return rta;
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async update(id: string, changes: UpdateUserDto) {
    const user = this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  async getOrdersByUser(id: string) {
    const user = this.findOne(id);

    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
}
