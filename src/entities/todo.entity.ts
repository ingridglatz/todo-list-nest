type TodoConstructor = {
  id?: number;
  title: string;
  completed?: boolean;
};

export class Todo {
  id?: number;
  title: string;
  completed: boolean;

  constructor({ id, title, completed }: TodoConstructor) {
    this.id = id;
    this.title = title;
    this.completed = completed ?? false;
  }
}
