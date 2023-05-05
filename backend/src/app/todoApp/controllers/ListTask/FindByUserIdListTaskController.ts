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
        const  userId  = 'b3ed8513-9f10-4b56-92c4-86eec76d19e7'
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY

        const data = await this._findbyuseridusecase.run(userId)
        
        res.status(200).json(data);
        
    }

}

export {FindByUserIdListTaskController}