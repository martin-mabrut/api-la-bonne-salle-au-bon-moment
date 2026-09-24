import type { Request, Response, NextFunction } from "express";
import { roleSchema } from "../validadors/roleShema.ts";

export const checkRoleData = (req: Request, res: Response, next: NextFunction) => {
    const bodyChecked = roleSchema.validate(req.body);
    const error = bodyChecked.error;

    if (error) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    req.body = bodyChecked.value;
    next();
};