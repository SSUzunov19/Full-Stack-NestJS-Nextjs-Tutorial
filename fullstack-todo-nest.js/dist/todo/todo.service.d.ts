import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    create(createTodoDto: CreateTodoDto): Promise<CreateTodoDto & Todo>;
    findAll(completed?: boolean): Promise<Todo[]>;
    findOne(id: number): Promise<Todo>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    remove(id: number): void;
}
