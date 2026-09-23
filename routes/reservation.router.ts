import express from "express";
import { reservationController} from "../controllers/reservation.controller.ts";
import { checkReservationData } from "../middlewares/checkReservationData.ts";

const reservationRouter = express.Router();

// Routes Reservation
reservationRouter.post("/reservations", checkReservationData, reservationController.createReservation);
reservationRouter.get("/reservations", reservationController.findAllReservations);
reservationRouter.get("/rerservations/:id", reservationController.findReservationById);
reservationRouter.put("/reservations/:id", reservationController.updateReservation);
reservationRouter.delete("/reservations/:id", reservationController.deleteReservation);

export default reservationRouter;