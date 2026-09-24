import type { Request, Response, NextFunction } from "express";
import { reservationUpdateSchema } from "../validadors/reservationShema.ts";

export const checkReservationUpdateData = (req: Request, res: Response, next: NextFunction) => {
    const bodyChecked = reservationUpdateSchema.validate(req.body);
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