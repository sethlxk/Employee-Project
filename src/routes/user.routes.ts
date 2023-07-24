import { Router } from "express";
import { userInputValidation } from "../controllers/middleware/user.validation.controller";
import { getAllUsersHandler, getUserHandler, postUserHandler } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.post('/', userInputValidation, postUserHandler) //register user
userRouter.get('/', getAllUsersHandler)
userRouter.post('/login', getUserHandler) //login user
