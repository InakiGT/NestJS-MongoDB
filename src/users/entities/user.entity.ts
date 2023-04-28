import { Customer } from './customer.entity';

export class User {
  id: number;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  customer: Customer;
}
