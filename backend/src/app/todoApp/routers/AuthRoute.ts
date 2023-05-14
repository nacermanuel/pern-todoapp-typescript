import { Request, Response, Router } from 'express'
import { LogInController } from '../controllers/Auth/LogInController'
import { CreateUserController } from '../controllers/User/CreateUserController';

const authRouter = Router()

authRouter.post(
    '/auth/register',
    async (req:Request, res: Response) => {
        try{
            const createUsercontroller = new CreateUserController();

            await createUsercontroller.run(req,res) ;
        }catch(error){
            console.log(`Error UserRoutes.ts POST/user: ${error}`)
        }
    }
)

authRouter.post(
    '/auth/login',
    async (req: Request, res: Response) => {
        try{
            const newLogin = new LogInController();

            await newLogin.run(req,res);
        }catch(error){
            console.log(`Error LogInRoutes.ts POST/auth/login: ${error}`)
        }
    }
)

export { authRouter } ;