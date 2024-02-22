import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from '../services/todo.service';

@Controller('/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async list() {
    const todos = await this.todoService.list();
    return todos;
  }

  @Get('/:id')
  async getUnique(@Param('id') id: string) {
    const todo = await this.todoService.getUnique(Number(id));

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }

  @Post()
  async create(@Body() body: any) {
    const { title } = body;
    const todo = await this.todoService.create(title);
    return todo;
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const todo = await this.todoService.delete(Number(id));

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() body: any) {
    const { title, completed } = body;
    const todo = await this.todoService.update(Number(id), title, completed);

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }
}
