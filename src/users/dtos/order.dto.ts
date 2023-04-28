import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly customer: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
