import express from "express";
import { roleController } from "../controllers/role.controller.ts"

const roleRouter = express.Router();

// Routes Roles
roleRouter.post("/roles", roleController.createRole);
roleRouter.get("/roles", roleController.findAllRoles);
roleRouter.get("/roles/:id", roleController.findRoleById);
roleRouter.put("/roles/:id", roleController.updateRole);
roleRouter.delete("/roles/:id", roleController.deleteRole);

export default roleRouter;