import { Router, Request, Response } from "express";
import { CreateListTaskController } from "../controllers/ListTask/CreateListTaskController";

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

export {ListTaskRouter}