import { Router } from "express";
import { userRouter } from "./UserRoutes";

const mainRouter = Router()

mainRouter.use(userRouter) ;

export { mainRouter };