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

/**
 * @swagger
 * /roles/{id}:
 *  get:
 *      summary: Récupère un role par son id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: L'id du role à récupérer
 *      responses:
 *          200:
 *              description: Role récupéré avec succès
 *          404:
 *              description: Role non trouvé
 */
roleRouter.get("/roles/:id", roleController.findRoleById);
roleRouter.put("/roles/:id", roleController.updateRole);
roleRouter.delete("/roles/:id", roleController.deleteRole);

export default roleRouter;