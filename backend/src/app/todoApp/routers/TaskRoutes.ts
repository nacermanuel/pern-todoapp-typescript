import { Router, Request, Response } from "express";
import { CreateTaskController } from "../controllers/Task/CreateTaskController";
import { GetTaskbyUserIdUseCase } from "../../../contexts/todoApp/Task/application/GetTaskbyUserIdUseCase";
import { GetTaskbyUserIdController } from "../controllers/Task/GetTaskbyUserIdController";


const taskRouter = Router()

taskRouter.post(
    '/task',
    async (req: Request, res: Response) => {
        try{
            const creteTaskcontroller = new CreateTaskController();
            await creteTaskcontroller.run(req,res) ;
        }catch(error){
            console.log(`Error TaskRoutes.ts POST/task: ${error}`)
        }
    }
)

taskRouter.get(
    '/task',
    async (req: Request, res: Response) => {
        try{
            const gettaskbyuserid = new GetTaskbyUserIdController()
            await gettaskbyuserid.run(req, res);
        }catch(error){
            console.log(`Error TaskRoutes.ts GET/gettask/:id: ${error}`)
        }
    }
)

export { taskRouter } ;