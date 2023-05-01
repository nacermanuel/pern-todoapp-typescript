import { Request, Response } from "express";
import { EliminateTaskUseCase } from "../../../../contexts/todoApp/Task/application/EliminateTaskUseCase";
import { TaskRepository } from "../../../../contexts/todoApp/Task/domain/repository/TaskRepository";

class EliminateTaskController {

    private _taskrepository : EliminateTaskUseCase;

    constructor(){
        this._taskrepository = new EliminateTaskUseCase()
    }

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.query ; 
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY

        if(!id){
            res.send('EliminateTaskController Response: Error query null')
            throw new Error("EliminateTaskController Response: Error query null")
        }
        const taskid: string = id.toString()
        const data = await this._taskrepository.run(taskid)

        res.status(200).json(data);
    }

}

export {EliminateTaskController}