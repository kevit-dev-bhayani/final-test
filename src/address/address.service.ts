import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Address } from './address.schema';
import { CreateAddressDto } from './dtos/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private addressModel: mongoose.Model<Address>,
  ) {}

  async findAll() {
    return await this.addressModel.find();
  }

  async findById(id: string) {
    return await this.addressModel.findById(id);
  }

  async findByAddress(address: string) {
    return await this.addressModel.findOne({ address });
  }

  async create(createAddress: CreateAddressDto) {
    const address = this.addressModel.create(createAddress);
    return address;
  }

  async update(id: string, attrs: Partial<Address>) {
    const address = await this.addressModel.findById(id);
    if (!address) {
      throw new NotFoundException('address not found');
    }
    Object.assign(address, attrs);
    address.updatedAt = Date.now();
    return await address.save();
  }

  async delete(id: string) {
    const address = await this.addressModel.findById(id);
    if (!address) {
      throw new NotFoundException('address not found');
    }
    return await this.addressModel.findByIdAndDelete(id);
  }
}
