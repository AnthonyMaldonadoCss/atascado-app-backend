import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Neighbors {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({
    required: true,
  })
  organization_id: string;

  @Prop({
    trim: true,
    required: true,
  })
  name: string;

  @Prop({
    trim: true,
    required: true,
  })
  last_name: string;

  @Prop({
    trim: true,
    required: false,
    default: true,
  })
  status: boolean;

  @Prop({
    required: false,
    default: 0,
  })
  building: number;

  @Prop({
    required: true,
  })
  vehicles: Array<number>;

  @Prop({
    trim: true,
    required: true,
  })
  type: string;

  @Prop({
    required: false,
  })
  visited_time: mongoose.Schema.Types.Date;

  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  contact_telephone_1: number;

  @Prop({
    required: true,
  })
  contact_telephone_2: number;

  @Prop({
    required: false,
  })
  contact_telephone_3: number;

  @Prop({
    required: false,
  })
  telephone_owner: number; //creo que es mejor una tabla de visitantes
}

export const NeighborsSchema = SchemaFactory.createForClass(Neighbors);
