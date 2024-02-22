import { Injectable } from '@nestjs/common';
import { Todo } from 'src/entities';
import { TodoRepository } from 'src/repositories';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async list() {
    const todos = await this.todoRepository.list();
    return todos;
  }

  async getUnique(id: number) {
    const todo = await this.todoRepository.getUnique(id);
    return todo;
  }

  async create(title: string) {
    let todo = new Todo({ title });
    todo = await this.todoRepository.create(todo);
    return todo;
  }

  async delete(id: number) {
    const todo = await this.todoRepository.getUnique(id);

    if (!todo) {
      return false;
    }

    await this.todoRepository.delete(id);
    return true;
  }

  async update(id: number, title: string, completed: boolean) {
    let todo = await this.todoRepository.getUnique(id);

    if (!todo) {
      return null;
    }

    todo.title = title;
    todo.completed = completed;

    todo = await this.todoRepository.update(todo);
    return todo;
  }
}
