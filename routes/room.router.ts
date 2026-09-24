import express from "express";
import { roomController } from "../controllers/room.controller.ts";
import { checkRoomData } from "../middlewares/checkRoomData.ts";

const roomRouter = express.Router();

// Routes Room

/**
 * @swagger
 * /rooms:
 *  post:
 *      summary: Créé une room
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name: 
 *                              type: string
 *                          capacity:
 *                              type: integer
 *      responses:
 *          201:
 *              description: Room créé avec succès
 *          400:
 *              description: Données invalides
 *          500:
 *              description: Création impossible
 */
roomRouter.post("/rooms", checkRoomData, roomController.createRoom);

/**
 * @swagger
 * /rooms:
 *  get:
 *      summary: Récupère la liste de toutes les rooms
 *      responses:
 *          200:
 *              description: Liste des rooms récupérée avec succès
 */

roomRouter.get("/rooms", roomController.findAllRooms);

/**
 * @swagger
 * /rooms/{id}:
 *  get:
 *      summary: Récupère une room par son id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: L'id de la room à récupérer
 *      responses:
 *          200:
 *              description: Room récupérée avec succès
 *          404:
 *              description: Room non trouvé
 */
roomRouter.get("/rooms/:id", roomController.findRoomById);

/**
 * @swagger
 * /rooms/{id}:
 *  put:
 *      summary: Modifie une room par son id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: L'id de la room à modifier
 *      requestBody:
 *          required: false
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name: 
 *                              type: string
 *                          capacity:
 *                              type: integer
 *      responses:
 *          200:
 *              description: Room modifiée avec succès
 *          400:
 *              description: Données invalides
 *          404:
 *              description: Room non trouvé
 *          500:
 *              description: Modification impossible
 */
roomRouter.put("/rooms/:id", checkRoomData, roomController.updateRoom);

/**
 * @swagger
 * /rooms/{id}:
 *  delete:
 *      summary: Supprime une room par son id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: L'id de la room à supprimer
 *      responses:
 *          204:
 *              description: Room supprimée avec succès
 *          404:
 *              description: Room non trouvé
 *          500:
 *              description: Suppression impossible
 */
roomRouter.delete("/rooms/:id", roomController.deleteRoom);

export default roomRouter;