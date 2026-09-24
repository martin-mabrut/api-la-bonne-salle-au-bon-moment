import express from "express";
import { roleController } from "../controllers/role.controller.ts"

const roleRouter = express.Router();

// Routes Roles

/**
 * @swagger
 * /roles:
 *  post:
 *      summary: Créé un role
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          label: 
 *                              type: string
 *      responses:
 *          201:
 *              description: Role créé avec succès
 *          400:
 *              description: Données invalides
 *          500:
 *              description: Création impossible
 */
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

/**
 * @swagger
 * /roles/{id}:
 *  put:
 *      summary: Modifie un role par son id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: L'id du role à modifier
 *      requestBody:
 *          required: false
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          label: 
 *                              type: string
 *      responses:
 *          200:
 *              description: Role modifié avec succès
 *          400:
 *              description: Données invalides
 *          404:
 *              description: Role non trouvé
 *          500:
 *              description: Modification impossible
 */
roleRouter.put("/roles/:id", roleController.updateRole);
roleRouter.delete("/roles/:id", roleController.deleteRole);

export default roleRouter;