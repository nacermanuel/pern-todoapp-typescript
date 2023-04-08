import { TaskEntity } from "../domain/entities/TaskEntity";
import { TaskRepository } from "../domain/repository/TaskRepository";

class CreateTaskUseCase {
    private _taskRepository: TaskRepository ;

    constructor(task: TaskRepository){
        this._taskRepository = task
    }

    async run(task:TaskEntity): Promise<TaskEntity>{
        const newTask = await this._taskRepository.create(task);
        return newTask
    }
}

export { CreateTaskUseCase };