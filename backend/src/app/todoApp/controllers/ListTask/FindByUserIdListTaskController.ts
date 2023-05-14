import { Request, Response } from "express"
import { FindByUserIdListTaskUseCase } from "../../../../contexts/todoApp/ListTask/application/FindByUserIdListTaskUseCase"
import { ListTaskRepository } from "../../../../contexts/todoApp/ListTask/domian/repository/ListTaskRepository"
import { SequelizeListTaskImplementation } from "../../../../contexts/todoApp/ListTask/infrastructure/persistence/sequelize/SequelizeListTaskImplementation"
import { SequelizeListTaskModel } from "../../../../contexts/todoApp/ListTask/infrastructure/persistence/sequelize/SequelizeListTaskModel"

class FindByUserIdListTaskController{

    private readonly _findbyuseridusecase: FindByUserIdListTaskUseCase

    constructor(){
        this._findbyuseridusecase = new FindByUserIdListTaskUseCase()
    }

    async run(req: Request, res: Response): Promise<void> {
        //@ts-ignore
        const  userId  = req.customInfo

        const data = await this._findbyuseridusecase.run(userId)
        
        res.status(200).json(data);
        
    }

}

export {FindByUserIdListTaskController}