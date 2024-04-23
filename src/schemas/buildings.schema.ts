import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Buildings {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({
    required: true,
  })
  organization_id: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  floors: number;

  @Prop({
    required: false,
  })
  description: string;

  @Prop({
    required: true,
  })
  color: string;
}

export const BuildingsSchema = SchemaFactory.createForClass(Buildings);
