import { IsArray, IsDate, IsMongoId, IsNotEmpty } from 'class-validator';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsMongoId()
  @ApiProperty()
  readonly customer: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: Date;

  @IsArray()
  @ApiProperty()
  @IsNotEmpty()
  readonly products: string[];
}

export class UpdateOrderDto extends PartialType(
  OmitType(CreateOrderDto, ['products']),
) {}

export class AddProductsDto {
  @IsArray()
  readonly productsIds: string[];
}
