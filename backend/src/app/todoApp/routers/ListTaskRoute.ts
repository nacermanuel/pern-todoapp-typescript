import { Router, Request, Response } from "express";
import { CreateListTaskController } from "../controllers/ListTask/CreateListTaskController";
import { FindByUserIdListTaskController } from "../controllers/ListTask/FindByUserIdListTaskController";
import { UpdateListTaskController } from "../controllers/ListTask/UpdateListTaskController";

const ListTaskRouter = Router();

ListTaskRouter.post(
    '/list',
    async (req:Request, res: Response) => {
        try{
            const createListTaskController = new CreateListTaskController();
            await createListTaskController.run(req,res);
        }catch(e){
            console.log(`Error ListTaskRouter.ts POST/list: ${e}`)
        }
    }
)

ListTaskRouter.get(
    '/list',
    async (req:Request, res: Response) => {
        try{
            const findbyUserIdListTaskcontroller = new FindByUserIdListTaskController();
            await findbyUserIdListTaskcontroller.run(req,res);
        }catch(e){
            console.log(`Error ListTaskRouter.ts GET/list: ${e}`)
        }
    }
)

ListTaskRouter.post(
    '/listupdate',
    async(req:Request,res:Response) => {
        try{
            const updatelisttaskcontroller = new UpdateListTaskController();
            await updatelisttaskcontroller.run(req,res);
        }catch(e){
            console.log(`Error ListTaskRouter.ts POST/listupdate: ${e}`)
        }
    }
)

export {ListTaskRouter}