import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

//timestamps: cuando creo un dato le coloca un created_at y un updated_at
@Schema()
export class User {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  cedula: string;

  @Prop({
    trim: true,
  })
  tipo: string;

  @Prop({
    unique: true,
  })
  id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
