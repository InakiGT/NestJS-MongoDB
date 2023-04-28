import { Exclude } from 'class-transformer';

import { Product } from '../../products/entities/product.entity';
import { Order } from './order.entity';

export class OrderItem {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  quantity: number;
  product: Product;
  order: Order;
}
