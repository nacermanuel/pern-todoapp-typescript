import { TaskRepository } from "../domain/repository/TaskRepository";
import { SequelizeTaskImpl } from "../infrastructure/persistence/sequelize/SequelizeTaskImpl";

class EliminateTaskUseCase {
    private readonly _task : TaskRepository ;

    constructor(){
        this._task = new SequelizeTaskImpl();
    }

    async run(task:string):Promise<void>{
        this._task.eliminatetask(task);
    }
}

export { EliminateTaskUseCase }