import { Router } from "express";
import userController from "../controllers/user.controller.js";


const userRoute = Router();

userRoute.get('/', userController);  
export default userRoute;