import {
  IsEmail,
  IsString,
  IsNumber,
  min,
  max,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsNumber()
  //   @min(100000000)
  //   @max(9999999999)
  @IsOptional()
  phoneNumber: number;

  @IsString()
  @IsOptional()
  preferredLanguage: string;
}
