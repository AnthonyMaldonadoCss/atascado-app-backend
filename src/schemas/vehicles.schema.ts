import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

//timestamps: cuando creo un dato le coloca un created_at y un updated_at
@Schema({ timestamps: true })
export class Vehicles {
  _id: mongoose.Schema.Types.ObjectId;
  @Prop({
    required: true,
    trim: true,
  })
  organization_id: string;

  @Prop({
    trim: true,
  })
  marca: string;

  @Prop({
    trim: true,
  })
  placa: string;

  @Prop({
    trim: true,
  })
  color: string;

  @Prop({
    trim: true,
    unique: true,
  })
  puesto: number;

  @Prop({
    default: '',
  })
  alias: string;

  @Prop({
    default: false,
  })
  status: boolean;
}

export const VehiclesSchema = SchemaFactory.createForClass(Vehicles);
