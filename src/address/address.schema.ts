import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';
export type AddressDocument = HydratedDocument<Address>;
@Schema()
export class Address {
  @Prop({ required: true, type: String })
  street: string;

  @Prop({ required: true, type: String })
  area: string;

  @Prop({ required: true, type: String })
  city: string;

  @Prop({ required: true, type: String })
  state: string;

  @Prop({ required: true, type: Number })
  zipcode: number;

  @Prop({ default: Date.now(), type: Date })
  createdAt: number;

  @Prop({ default: Date.now(), type: Date })
  updatedAt: number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
