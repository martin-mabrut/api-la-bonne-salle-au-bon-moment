import express from "express";
import { userController } from "../controllers/user.controller.ts";

const userRouter = express.Router();

//Routes User
userRouter.post("/users", userController.createUser);
userRouter.get("/users", userController.findAllUsers);
userRouter.get("/users/:id", userController.findUserById);
userRouter.put("/users/:id", userController.updateUser);
userRouter.delete("/users/:id", userController.deleteUser);

export default userRouter;