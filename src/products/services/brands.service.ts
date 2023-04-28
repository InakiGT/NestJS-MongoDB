import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@Injectable()
export class BrandsService {
  findAll() {
    return [];
  }

  async findOne(id: number) {
    return {};
  }

  create(data: CreateBrandDto) {
    return {};
  }

  async update(id: number, changes: UpdateBrandDto) {
    return {};
  }

  remove(id: number) {
    return 0;
  }
}
