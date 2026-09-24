import type { Request, Response, NextFunction } from "express";
import { userUpdateSchema } from "../validadors/userShema.ts";

export const checkUserUpdateData = (req: Request, res: Response, next: NextFunction) => {
    const bodyChecked = userUpdateSchema.validate(req.body);
    const error = bodyChecked.error;

    if (error) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    req.body = bodyChecked.value;
    next();
};