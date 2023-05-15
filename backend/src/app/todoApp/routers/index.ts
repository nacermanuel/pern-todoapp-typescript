import { Router } from "express";
import { userRouter } from "./UserRoutes";
import { taskRouter } from "./TaskRoutes";
import { authRouter } from "./AuthRoute";
import { ListTaskRouter } from "./ListTaskRoute";
import { tokenValidator } from "../../shared/framework/middleware/tokeValidator";

const mainRouter = Router()

mainRouter.use(authRouter) ;
mainRouter.use(tokenValidator)
mainRouter.use(userRouter) ;
mainRouter.use(taskRouter) ;
mainRouter.use(ListTaskRouter) ;

export { mainRouter };