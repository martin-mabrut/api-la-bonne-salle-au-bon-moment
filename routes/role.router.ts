import express from "express";
import { roleController } from "../controllers/role.controller.ts"

const roleRouter = express.Router();

// Routes Roles
roleRouter.post("/roles", roleController.createRole);

/**
 * @swagger
 * /roles:
 *  get:
 *      summary: Récupère la liste de tous les roles
 *      responses:
 *          200:
 *              description: Liste des roles récupérée avec succès
 */

roleRouter.get("/roles", roleController.findAllRoles);
roleRouter.get("/roles/:id", roleController.findRoleById);
roleRouter.put("/roles/:id", roleController.updateRole);
roleRouter.delete("/roles/:id", roleController.deleteRole);

export default roleRouter;