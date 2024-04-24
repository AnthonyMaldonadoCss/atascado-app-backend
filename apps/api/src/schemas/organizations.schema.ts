import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Organizations {
  @Prop({
    unique: true,
  })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({
    required: true,
    trim: true,
  })
  name: string;

  @Prop({
    required: true,
    trim: true,
  })
  direccion: string;

  @Prop({
    required: false,
    trim: true,
  })
  punto_referencia: string;

  @Prop({
    required: false,
    default: 0,
  })
  number_buildings: number;

  @Prop({
    required: false,
    default: true,
  })
  status: boolean;

  @Prop({
    default: 60,
    required: false,
  })
  time_delete_visitor: number;

  @Prop({
    required: true,
  })
  number_parking_spaces: number;
}

export const OrganizationsSchema = SchemaFactory.createForClass(Organizations);
