import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/create-address.dto';
import { UpdateAddressDto } from './dtos/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(public addressService: AddressService) {}

  @Get()
  async getAll() {
    return await this.addressService.findAll();
  }

  @Get('/id/:id')
  async getById(@Param('id') id: string) {
    return await this.addressService.findById(id);
  }

  @Post('/new')
  async createAddress(@Body() body: CreateAddressDto) {
    return this.addressService.create(body);
  }

  @Patch('/update/:id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateAddressDto) {
    return this.addressService.update(id, body);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.addressService.delete(id);
  }
}
