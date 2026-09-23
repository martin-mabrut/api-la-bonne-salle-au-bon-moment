import type { Request, Response, NextFunction } from "express";
import { userSchema } from "../validadors/userShema.ts";

export const checkUserData = (req: Request, res: Response, next: NextFunction) => {
    const bodyChecked = userSchema.validate(req.body);
    const error = bodyChecked.error;

    if (error) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    req.body = bodyChecked.value;
    next();
};
