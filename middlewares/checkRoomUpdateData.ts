import type { Request, Response, NextFunction } from "express";
import { roomUpdateSchema } from "../validadors/roomShema.ts";

export const checkRoomUpdateData = (req: Request, res: Response, next: NextFunction) => {
    const bodyChecked = roomUpdateSchema.validate(req.body);
    const error = bodyChecked.error;

    if (error) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    req.body = bodyChecked.value;
    next();
};