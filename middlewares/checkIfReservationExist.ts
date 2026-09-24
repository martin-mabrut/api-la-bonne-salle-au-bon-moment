import type { Request, Response, NextFunction } from "express";
import { reservationRepository } from "../repositories/reservation.repository.ts";

export const checkIfReservationExist = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const reservation = await reservationRepository.findReservationById(Number(id));

    if (!reservation) {
        return res.status(404).json({ message: "Réservation non trouvée" });
    }

    next();
};
