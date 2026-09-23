import type { Request, Response, NextFunction } from "express";
import { reservationSchema } from "../validadors/reservationShema.ts";

export const checkReservationData = (req: Request, res: Response, next: NextFunction) => {
    const bodyChecked = reservationSchema.validate(req.body);
    const error = bodyChecked.error;
    

    if (error) {
    return res.status(400).json({
    message:
    "Données invalides"
    });
    }

    req.body = bodyChecked.value;
    next();
};