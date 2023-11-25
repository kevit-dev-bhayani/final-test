import { IsEmail, IsString, IsNumber, min, max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsNumber()
  //   @min(100000000)
  //   @max(9999999999)
  phoneNumber: number;

  @IsString()
  preferredLanguage: string;
}
