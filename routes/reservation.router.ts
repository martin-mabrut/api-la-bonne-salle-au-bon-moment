import express from "express";
import { reservationController} from "../controllers/reservation.controller.ts";
import { checkReservationData } from "../middlewares/checkReservationData.ts";
import { checkReservationUpdateData } from "../middlewares/checkReservationUpdateData.ts";

const reservationRouter = express.Router();

// Routes Reservation
reservationRouter.post("/reservations", checkReservationData, reservationController.createReservation);

/**
 * @swagger
 * /reservations:
 *  get:
 *      summary: Récupère la liste de toutes les reservation
 *      responses:
 *          200:
 *              description: Liste des reservations récupérée avec succès
 */

reservationRouter.get("/reservations", reservationController.findAllReservations);

/**
 * @swagger
 * /reservations/{id}:
 *  get:
 *      summary: Récupère une réservation par son id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: L'id de la reservation à récupérer
 *      responses:
 *          200:
 *              description: Liste des reservations récupérée avec succès
 *          404:
 *              description: Reservation non trouvé
 */

reservationRouter.get("/reservations/:id", reservationController.findReservationById);
reservationRouter.put("/reservations/:id", checkReservationUpdateData, reservationController.updateReservation);
reservationRouter.delete("/reservations/:id", reservationController.deleteReservation);

export default reservationRouter;