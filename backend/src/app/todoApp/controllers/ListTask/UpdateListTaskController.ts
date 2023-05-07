import { Request, Response } from "express";
import { UpdateListTaskUseCase } from "../../../../contexts/todoApp/ListTask/application/UpdateListTaskUseCase";
import { ListTaskRepository } from "../../../../contexts/todoApp/ListTask/domian/repository/ListTaskRepository";
import { SequelizeListTaskImplementation } from "../../../../contexts/todoApp/ListTask/infrastructure/persistence/sequelize/SequelizeListTaskImplementation";
import { ListTaskValueObject } from "../../../../contexts/todoApp/ListTask/domian/ValueObject/ListTaskValueObject";

class UpdateListTaskController{
    private readonly _listtaskrepository : ListTaskRepository;
    private readonly _updatelisttaskusecase : UpdateListTaskUseCase;

    constructor(){
        this._listtaskrepository = new SequelizeListTaskImplementation
        this._updatelisttaskusecase = new UpdateListTaskUseCase(this._listtaskrepository)
    }

    async run(req: Request, res: Response): Promise<void>{
        const listTask = req.body

        const id = 'b3ed8513-9f10-4b56-92c4-86eec76d19e7'
        // ESTE IDE DEBE VENIR DEL FRONT TOMADO DEL LOCALSTORAGE (COMO SE HIZO EN NOCOUNTRY)  

        const data = await this._updatelisttaskusecase.run(id, listTask);

        if(data){
            res.status(200).json(data) ;
        }else{
            console.log(`Error UpdateListTaskController, resultado fue: ${data}`)
        }
    }
}

export {UpdateListTaskController}