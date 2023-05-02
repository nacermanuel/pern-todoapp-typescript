import { Router, Request, Response } from "express";
import { CreateTaskController } from "../controllers/Task/CreateTaskController";
import { GetTaskbyUserIdController } from "../controllers/Task/GetTaskbyUserIdController";
import { EliminateTaskController } from "../controllers/Task/EliminateTaskController";
import { UpdateTaskController } from "../controllers/Task/UpdateTaskController";


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
            console.log(`Error TaskRoutes.ts GET/task ${error}`)
        }
    }
)

taskRouter.delete(
    '/task',
    async (req: Request, res: Response) => {
        try{
            const eliminatetask = new EliminateTaskController();
            await eliminatetask.run(req, res);
        }catch(error){
            console.log(`Error TaskRoutes.ts DELETE/task ${error}`)
        }
    }
)

taskRouter.post(
    '/taskupdate',
    async ( req: Request, res: Response) =>{
        try{
            const updatetask = new UpdateTaskController();
            await updatetask.run(req,res);
        }catch(error){
           console.log(`Error TaskRoutes.ts POST/taskupdate ${error}`) 
        }
    }
)

export { taskRouter } ;