import { TaskRepository } from "../domain/repository/TaskRepository";

import { TaskEntity } from "../domain/entities/TaskEntity";

class UpdateTaskUseCase {
    private _taskrepository: TaskRepository;
    constructor(task: TaskRepository){
        this._taskrepository = task
    }

    async run(task: TaskEntity): Promise<boolean|null>{
        const updateTask = await this._taskrepository.updateTask(task)
        if(updateTask){
            return true
        }else{
            console.log(`En UpdateTaskUseCase fue ${updateTask}`);
            return null
        }
    }
}

export {UpdateTaskUseCase}