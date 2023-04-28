import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';

@Injectable()
export class CategoriesService {
  findAll() {
    return [];
  }

  async findOne(id: number) {
    return {};
  }

  create(data: CreateCategoryDto) {
    return {};
  }

  async update(id: number, changes: UpdateCategoryDto) {
    return {};
  }

  remove(id: number) {
    return 0;
  }
}
