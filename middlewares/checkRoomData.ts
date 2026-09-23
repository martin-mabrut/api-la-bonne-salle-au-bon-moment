import type { Request, Response, NextFunction } from "express";
import { roomSchema } from "../validadors/roomShema.ts";

export const checkRoomData = (req: Request, res: Response, next: NextFunction) => {
    const bodyChecked = roomSchema.validate(req.body);
    const error = bodyChecked.error;

    if (error) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    req.body = bodyChecked.value;
    next();
};
