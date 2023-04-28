import { Product } from './product.entity';

export class Brand {
  id: number;
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
}
