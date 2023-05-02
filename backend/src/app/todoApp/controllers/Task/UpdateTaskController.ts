import { Request, Response } from "express";
import { UpdateTaskUseCase } from "../../../../contexts/todoApp/Task/application/UpdateTaskUseCase";
import { SequelizeTaskImpl } from "../../../../contexts/todoApp/Task/infrastructure/persistence/sequelize/SequelizeTaskImpl";
import { TaskValueObject } from "../../../../contexts/todoApp/Task/domain/valueObjects/TaskValueObject";

class UpdateTaskController {
    private readonly _taskRepository: SequelizeTaskImpl ;
    private readonly _updateTaskUseCase: UpdateTaskUseCase;

    constructor(){
        this._taskRepository = new SequelizeTaskImpl();
        this._updateTaskUseCase = new UpdateTaskUseCase(this._taskRepository);
    }

    async run(req: Request, res: Response): Promise<void> {
        const taskSent = req.body

        const task = new TaskValueObject(taskSent.id,taskSent.name, taskSent.description, taskSent.userId,taskSent.date,taskSent.complete) ;

        const data = await this._updateTaskUseCase.run(task) ;
        
        if(data){
            res.status(200).json(data) ;
        }else{
            console.log(`Error UpdateTaskController, resultado fue: ${data}`)
        }



    }
}

export {UpdateTaskController}