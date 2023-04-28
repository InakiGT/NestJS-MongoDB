import { Product } from './product.entity';

export class Category {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
}
