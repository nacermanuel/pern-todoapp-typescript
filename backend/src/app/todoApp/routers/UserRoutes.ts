import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";

const userRouter = Router() ;

userRouter.post(
    '/user',
    async (req:Request, res: Response) => {
        try{
            const createUsercontroller = new CreateUserController();

            await createUsercontroller.run(req,res) ;
        }catch(error){
            console.log(`Error UserRoutes.ts : ${error}`)
        }
    }
)

export { userRouter } ;