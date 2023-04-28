import { User } from './user.entity';
import { Order } from './order.entity';

export class Customer {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  orders: Order[];
}
