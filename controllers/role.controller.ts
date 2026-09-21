import type { Request, Response } from "express";
import { roleService } from "../services/role.service.ts";
import type { Role } from "../Dto/role.dto.ts";

export const roleController = {
    createRole: async (req: Request, res: Response) => {
        try {
            const data: Role = req.body;

            const role = await roleService.createRole(data);
            res.status(201).json(role);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    findAllRoles: async (_req: Request, res: Response) => {
        try {
            const roles = await roleService.findAllRoles();
            res.status(200).json(roles);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    findRoleById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const role = await roleService.findRoleById(Number(id));
            res.status(200).json(role);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    updateRole: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const data: Partial<Role> = req.body;
            const role = await roleService.updateRole(Number(id), data);
            res.status(200).json(role);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    deleteRole: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await roleService.deleteRole(Number(id));
            res.status(204).send();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },
};