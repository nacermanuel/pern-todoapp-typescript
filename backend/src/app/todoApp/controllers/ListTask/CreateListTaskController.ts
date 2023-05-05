import { Request, Response } from "express";
import { CreateListTaskUseCase } from "../../../../contexts/todoApp/ListTask/application/CreateListTaskUseCase";
import { ListTaskRepository } from "../../../../contexts/todoApp/ListTask/domian/repository/ListTaskRepository"
import { SequelizeListTaskImplementation } from "../../../../contexts/todoApp/ListTask/infrastructure/persistence/sequelize/SequelizeListTaskImplementation";
import { v4 as uuidv4 } from 'uuid';
import { ListTaskValueObject } from "../../../../contexts/todoApp/ListTask/domian/ValueObject/ListTaskValueObject";


class CreateListTaskController{
    private readonly _listTaskRepository: ListTaskRepository;
    private readonly _createListTaskUseCase: CreateListTaskUseCase;

    constructor(){
        this._listTaskRepository = new SequelizeListTaskImplementation();
        this._createListTaskUseCase = new CreateListTaskUseCase(this._listTaskRepository)
    }

    async run( req: Request, res: Response): Promise<void>{
        const { tasks, userId } = req.body ;
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY

        

        const id = uuidv4()

        const listTask = new ListTaskValueObject(id, tasks,userId);

        const data = await this._createListTaskUseCase.run(listTask);

        if(!data){
            res.send('CreateListTaskController Response: Error ListTask controller')
            throw new Error("CreateListTaskController Response: Error ListTask controller")
        }

        res.status(200).json(data) ;
    }
}
export {CreateListTaskController}