import type { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/user.repository.ts";

export const checkIfUserExist = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await userRepository.findUserById(Number(id));

    if (!user) {
        return res.status(404).json({ message: "User non trouvé" });
    }

    next();
};
