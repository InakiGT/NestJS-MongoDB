import { Exclude, Expose } from 'class-transformer';
import { Customer } from './customer.entity';
import { OrderItem } from './order-product.entity';

export class Order {
  id: number;
  date: Date;
  updatedAt: Date;
  customer: Customer;
  items: OrderItem[];
}
