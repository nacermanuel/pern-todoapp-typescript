import { Router } from "express";
import { userRouter } from "./UserRoutes";
import { taskRouter } from "./TaskRoutes";

const mainRouter = Router()

mainRouter.use(userRouter) ;
mainRouter.use(taskRouter) ;

export { mainRouter };