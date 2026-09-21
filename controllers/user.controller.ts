  import type { Request, Response } from "express";
  import { userService } from "../services/user.service.ts";
  import type { User } from "../Dto/user.dto.ts";

  export const userController = {
    createUser: async (req: Request, res: Response) => {
        try {
            const data: User = req.body;

            const user = await userService.createUser(data);
            res.status(201).json(user);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    findAllUsers: async (_req: Request, res: Response) => {
        try {
            const users = await userService.findAllUsers();
            res.status(200).json(users);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    findUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await userService.findUserById(Number(id));
            res.status(200).json(user);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const data: Partial<User> = req.body;
            const user = await userService.updateUser(Number(id), data);
            res.status(200).json(user);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await userService.deleteUser(Number(id));
            res.status(204).send();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },
  }
