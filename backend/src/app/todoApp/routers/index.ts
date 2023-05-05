import { Router } from "express";
import { userRouter } from "./UserRoutes";
import { taskRouter } from "./TaskRoutes";
import { authRouter } from "./LogInRoute";
import { ListTaskRouter } from "./ListTaskRoute";

const mainRouter = Router()

mainRouter.use(userRouter) ;
mainRouter.use(taskRouter) ;
mainRouter.use(authRouter) ;
mainRouter.use(ListTaskRouter) ;

export { mainRouter };