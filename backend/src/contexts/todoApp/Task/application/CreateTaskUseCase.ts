import { TaskEntity } from "../domain/entities/TaskEntity";
import { TaskRepository } from "../domain/repository/TaskRepository";

class CreateTaskUseCase {
    private _taskRepository: TaskRepository ;

    constructor(task: TaskRepository){
        this._taskRepository = task
    }

    async run(task:TaskEntity): Promise<TaskEntity | null>{
        const newTask = await this._taskRepository.create(task);

        if(!newTask){
            return null
        }
        return newTask
    }
}

export { CreateTaskUseCase };