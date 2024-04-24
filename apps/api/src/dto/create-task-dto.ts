//date transfer object
import { IsBoolean, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  description?: string;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  done?: boolean;
}
