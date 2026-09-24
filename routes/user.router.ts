import express from "express";
import { userController } from "../controllers/user.controller.ts";
import { checkUserData } from "../middlewares/checkUserData.ts";

const userRouter = express.Router();

//Routes User
userRouter.post("/users", checkUserData, userController.createUser);

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Récupère la liste de tous les users
 *      responses:
 *          200:
 *              description: Liste des users récupérée avec succès
 */

userRouter.get("/users", userController.findAllUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: Récupère un user par son id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: L'id du user à récupérer
 *      responses:
 *          200:
 *              description: User récupéré avec succès
 *          404:
 *              description: User non trouvé
 */
userRouter.get("/users/:id", userController.findUserById);
userRouter.put("/users/:id", checkUserData, userController.updateUser);
userRouter.delete("/users/:id", userController.deleteUser);

export default userRouter;