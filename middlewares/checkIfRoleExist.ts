import type { Request, Response, NextFunction } from "express";
import { roleRepository } from "../repositories/role.repository.ts";

export const checkIfRoleExist = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const role = await roleRepository.findRoleById(Number(id));

    if (!role) {
        return res.status(404).json({ message: "Role non trouvé" });
    }

    next();
};
