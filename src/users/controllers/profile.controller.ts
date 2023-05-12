import { Controller, Get, Req, UseGuards } from '@nestjs/common';

import { OrdersService } from '../services/orders.service';
import { Request } from 'express';
import { PayloadToken } from 'src/auth/models/token.model';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/roles.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('profile')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  constructor(private ordersService: OrdersService) {}
  @Get('my-orders')
  @Roles(Role.CUSTOMER)
  getOrders(@Req() req: Request) {
    const user = req.user as PayloadToken;

    return this.ordersService.ordersByCustomer(user.sub);
  }
}
