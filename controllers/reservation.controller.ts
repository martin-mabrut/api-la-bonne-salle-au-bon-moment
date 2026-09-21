import type { Request, Response } from "express";
import { reservationService } from "../services/reservation.service.ts";
import type { Reservation } from "../Dto/reservation.dto.ts";

export const reservationController = {
    createReservation: async (req: Request, res: Response) => {
        try {
            const data: Reservation = req.body;

            const reservation = await reservationService.createReservation(data);
            res.status(201).json(reservation);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    findAllReservations: async (_req: Request, res: Response) => {
        try {
            const reservations = await reservationService.findAllReservations();
            res.status(200).json(reservations);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    findReservationById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const reservation = await reservationService.findReservationById(Number(id));
            res.status(200).json(reservation);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    updateReservation: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const data: Partial<Reservation> = req.body;
            const reservation = await reservationService.updateReservation(Number(id), data);
            res.status(200).json(reservation);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },

    deleteReservation: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await reservationService.deleteReservation(Number(id));
            res.status(204).send();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    },
};