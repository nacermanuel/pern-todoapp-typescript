import { Request, Response } from "express";
import { CreateTaskUseCase } from "../../../../contexts/todoApp/Task/application/CreateTaskUseCase";
import { SequelizeTaskImpl } from "../../../../contexts/todoApp/Task/infrastructure/persistence/sequelize/SequelizeTaskImpl";
import { v4 as uuidv4 } from 'uuid';
import { TaskValueObject } from "../../../../contexts/todoApp/Task/domain/valueObjects/TaskValueObject";

class CreateTaskController {
    private readonly _taskRepository: SequelizeTaskImpl;
    private readonly _createTaskusecase: CreateTaskUseCase;

    constructor(){
        this._taskRepository = new SequelizeTaskImpl();
        this._createTaskusecase = new CreateTaskUseCase(this._taskRepository) ;
    }

    async run(req: Request, res: Response): Promise<void> {
        const { name, description, userId, date } = req.body ;
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY

        if(
            typeof name !== "string" ||
            typeof description !== "string" ||
            typeof userId !== "string" 
          ){
            console.log(req.body);
            console.log(`name: ${typeof name}`)
            console.log(`name: ${typeof description}`)
            res.send('CreateTaskController Response: Error Task data fields incorrect')
            throw new Error("CreateTaskController Response: Error Task data fields incorrect")
        }
        
        const id = uuidv4()

        const task = new TaskValueObject(id,name,description,userId,date,false) ;

        const data = await this._createTaskusecase.run(task) ;

        if(!data){
            res.send('CreateTaskController Response: Error task controller')
            throw new Error("CreateTaskController Response: Error task controller")
        }

        res.status(200).json(data) ;
    }
}

export { CreateTaskController }