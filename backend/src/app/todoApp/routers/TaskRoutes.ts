import { Router, Request, Response } from "express";
import { CreateTaskController } from "../controllers/Task/CreateTaskController";


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

export { taskRouter } ;