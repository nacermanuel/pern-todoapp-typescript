import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { findUserByEmailController } from "../controllers/findUserByEmailController";

const userRouter = Router() ;

userRouter.post(
    '/user',
    async (req:Request, res: Response) => {
        try{
            const createUsercontroller = new CreateUserController();

            await createUsercontroller.run(req,res) ;
        }catch(error){
            console.log(`Error UserRoutes.ts /user: ${error}`)
        }
    }
)

userRouter.post(
    '/finduser',
    async(req:Request, res: Response) => {
        try{
            const findUserbyemailcontroller = new findUserByEmailController();
            await findUserbyemailcontroller.run(req,res);
        }catch(error){
            console.log(`Error UserRoutes.ts /findUser: ${error}`)
        }
    }
)

export { userRouter } ;