import type { Request, Response, NextFunction } from "express";
import { roomRepository } from "../repositories/room.repository.ts";

export const checkIfRoomExist = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const room = await roomRepository.findRoomById(Number(id));

    if (!room) {
        return res.status(404).json({ message: "Room non trouvée" });
    }

    next();
};
