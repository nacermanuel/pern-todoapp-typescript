import { TaskEntity } from "../domain/entities/TaskEntity";
import { TaskRepository } from "../domain/repository/TaskRepository";
import { SequelizeTaskImpl } from "../infrastructure/persistence/sequelize/SequelizeTaskImpl";

class GetTaskbyUserIdUseCase {
    private readonly _taskRepository: TaskRepository ;

    constructor(){
        this._taskRepository = new SequelizeTaskImpl();
    }

    async run(userId: string): Promise<TaskEntity[]>{
        const data = await this._taskRepository.getTaskbyUserId(userId) ;
        return data 

    }
}

export { GetTaskbyUserIdUseCase }