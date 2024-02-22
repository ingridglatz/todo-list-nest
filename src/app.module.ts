import { Module } from '@nestjs/common';
import { TodoController } from './controllers';
import { TodoService } from './services';
import { PrismaService, TodoRepository } from './repositories';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService, PrismaService, TodoRepository],
})
export class AppModule {}
