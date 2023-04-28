import { Injectable, NotFoundException } from '@nestjs/common';

import {
  CreateProductDto,
  FilterProductsDto,
  UpdateProductDto,
} from './../dtos/products.dtos';

@Injectable()
export class ProductsService {
  findAll(params?: FilterProductsDto) {
    return [];
  }

  async findOne(id: number) {
    return {};
  }

  async create(data: CreateProductDto) {
    return {};
  }

  async update(id: number, changes: UpdateProductDto) {
    return {};
  }

  remove(id: number) {
    return 0;
  }
}
