import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  InternalServerErrorException,
  HttpCode,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from '../dto/create-task-dto';
import { UpdateTaskDto } from '../dto/update-task-dto';
import generateUniqueid from '../utils/helpers';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  findAll() {
    const data = this.taskService.findAll();
    return data;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.taskService.findOne(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  @Post()
  async create(@Body() body: CreateTaskDto) {
    try {
      const uniqueID = generateUniqueid();
      const bodyWithId = { _id: uniqueID, ...body };
      return await this.taskService.create(bodyWithId);
    } catch (err) {
      if (err.code === 11000) {
        throw new ConflictException('Task already exists');
      }
      throw err;
    }
  }

  @Delete(':id?')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    console.log({ id });

    if (!id) {
      throw new NotFoundException('The id task is required');
    }

    try {
      const task = await this.taskService.delete(id);
      if (!task) throw new NotFoundException('Task not found');
      return task;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  @Put(':id?')
  async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    if (!id) {
      throw new NotFoundException('The id task is required');
    }
    try {
      const task = this.taskService.update(id, body);
      if (!task) throw new NotFoundException('Task not found');
      return task;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
