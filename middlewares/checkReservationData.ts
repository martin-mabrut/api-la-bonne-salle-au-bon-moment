import type { Request, Response, NextFunction } from "express";

function isValidDate(date: Date): boolean {
    if (isNaN(date.getTime())) {
        return false;
    } else {
        return true;
    }
};

export const checkReservationData = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;


    if (data.userId && data.roomId && data.date_debut && data.date_fin) {
        const userId = data.userId;
        const roomId = data.roomId;
        const date_debut = new Date(data.date_debut);
        const date_fin = new Date(data.date_fin);

        if (typeof(userId) === "number" && typeof(roomId) === "number" && isValidDate(date_debut) && isValidDate(date_fin)) {
            next();
        } else {
            res.status(400).json({ error: "Champs invalides" });
        }
    } else {
        res.status(400).json({ error: "Champs manquants" });
    }
};