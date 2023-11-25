import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(public userService: UsersService) {}

  @Get()
  async getAll() {
    return await this.userService.findAll();
  }

  @Get('/id/:id')
  async getById(@Param('id') id: string) {
    return await this.userService.findById(id);
  }

  @Get('/address/:address')
  async getByAddress(@Param('address') address: string) {
    return await this.userService.findByAddress(address);
  }

  @Post('/new')
  async createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Patch('/update/:id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
