import { Router } from "express";
import { userRouter } from "./UserRoutes";
import { taskRouter } from "./TaskRoutes";
import { authRouter } from "./LogInRoute";

const mainRouter = Router()

mainRouter.use(userRouter) ;
mainRouter.use(taskRouter) ;
mainRouter.use(authRouter) ;

export { mainRouter };