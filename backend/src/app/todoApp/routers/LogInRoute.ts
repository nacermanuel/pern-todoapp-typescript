import { Request, Response, Router } from 'express'
import { LogInController } from '../controllers/Auth/LogInController'

const authRouter = Router()

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