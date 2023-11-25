import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateAddressDto {
  @IsString()
  @IsOptional()
  street: string;

  @IsString()
  @IsOptional()
  area: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsNumber()
  @IsOptional()
  zipcode: number;

  @IsString()
  @IsOptional()
  city: string;
}
