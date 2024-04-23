import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
//timestamps: cuando creo un dato le coloca un created_at y un updated_at
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Task {
  _id: mongoose.Types.ObjectId;
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  title: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop({
    default: false,
  })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
