import express from "express";
import { userController } from "../controllers/user.controller.ts";
import { checkUserData } from "../middlewares/checkUserData.ts";

const userRouter = express.Router();

//Routes User
userRouter.post("/users", checkUserData, userController.createUser);
userRouter.get("/users", userController.findAllUsers);
userRouter.get("/users/:id", userController.findUserById);
userRouter.put("/users/:id", checkUserData, userController.updateUser);
userRouter.delete("/users/:id", userController.deleteUser);

export default userRouter;