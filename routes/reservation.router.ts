import express from "express";
import { reservationController} from "../controllers/reservation.controller.ts";

const reservationRouter = express.Router();

// Routes Reservation
reservationRouter.post("/reservations", reservationController.createReservation);
reservationRouter.get("/reservations", reservationController.findAllReservations);
reservationRouter.get("/rerservations/:id", reservationController.findReservationById);
reservationRouter.put("/reservations/:id", reservationController.updateReservation);
reservationRouter.delete("/reservations/:id", reservationController.deleteReservation);

export default reservationRouter;