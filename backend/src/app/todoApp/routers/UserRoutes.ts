import { Request, Response, Router } from "express";
import { findUserByEmailController } from "../controllers/User/findUserByEmailController";
import { FindAllUsersController } from "../controllers/User/FindAllUsersController";

const userRouter = Router() ;

userRouter.post(
    '/finduser',
    async(req:Request, res: Response) => {
        try{
            const findUserbyemailcontroller = new findUserByEmailController();
            await findUserbyemailcontroller.run(req,res);
        }catch(error){
            console.log(`Error UserRoutes.ts POST/findUser: ${error}`)
        }
    }
)

userRouter.get(
    '/users',
    async (req: Request, res: Response) => {
        try{
            const findallUserscontroller = new FindAllUsersController();
            await findallUserscontroller.run(req,res);
        }catch(error){
            console.log(`Error UserRoutes.ts GET/users: ${error}`)
        }
    }
)

export { userRouter } ;