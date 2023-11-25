import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  address: string;

  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: Number })
  phoneNumber: number;

  @Prop({ required: true, type: String })
  preferredLanguage: string;

  @Prop({ default: Date.now(), type: Date })
  createdAt: number;

  @Prop({ default: Date.now(), type: Date })
  updatedAt: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
