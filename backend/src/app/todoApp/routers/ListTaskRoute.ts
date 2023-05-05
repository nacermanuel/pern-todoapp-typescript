import { Router, Request, Response } from "express";
import { CreateListTaskController } from "../controllers/ListTask/CreateListTaskController";
import { FindByUserIdListTaskController } from "../controllers/ListTask/FindByUserIdListTaskController";

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

export {ListTaskRouter}