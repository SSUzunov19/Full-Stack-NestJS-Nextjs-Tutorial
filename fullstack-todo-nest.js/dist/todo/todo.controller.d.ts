import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): Promise<CreateTodoDto & import("./entities/todo.entity").Todo>;
    findAll(completed?: boolean): Promise<import("./entities/todo.entity").Todo[]>;
    findOne(id: string): Promise<import("./entities/todo.entity").Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<import("./entities/todo.entity").Todo>;
    remove(id: string): void;
}
