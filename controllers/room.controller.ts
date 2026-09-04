import type { Request, Response } from "express";
import { roomService } from "../services/room.service.ts";
import type { Room } from "../Dto/room.dto.ts";

export const roomController = {
    createRoom: async (req: Request, res: Response) => {
        try {
            const data: Room = req.body;

            const room = await roomService.createRoom(data);
            res.status(201).json(room);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    findAllRooms: async (_req: Request, res: Response) => {
        try {
            const rooms = await roomService.findAllRooms();
            res.status(200).json(rooms);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    findRoomById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const room = await roomService.findRoomById(Number(id));
            res.status(200).json(room);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    updateRoom: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const data: Partial<Room> = req.body;
            const room = await roomService.updateRoom(Number(id), data);
            res.status(200).json(room);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    deleteRoom: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await roomService.deleteRoom(Number(id));
            res.status(204).send();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },
};
