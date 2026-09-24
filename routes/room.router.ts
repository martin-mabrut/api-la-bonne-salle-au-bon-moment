import express from "express";
import { roomController } from "../controllers/room.controller.ts";
import { checkRoomData } from "../middlewares/checkRoomData.ts";

const roomRouter = express.Router();

// Routes Room
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
roomRouter.put("/rooms/:id", checkRoomData, roomController.updateRoom);
roomRouter.delete("/rooms/:id", roomController.deleteRoom);

export default roomRouter;