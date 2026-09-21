import { reservationRepository } from "../repositories/reservation.repository.ts";
import type { Reservation } from "../Dto/reservation.dto.ts";

export const reservationService = {
    createReservation: async (data: Reservation) => {
        try {
            return await reservationRepository.createReservation(data);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur création réservation: ${message}`);
        }
    },

    findAllReservations: async () => {
        try {
            return await reservationRepository.findAllReservations();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération réservations: ${message}`);
        }
    },

    findReservationById: async (id: number) => {
        try {
            const reservation = await reservationRepository.findReservationById(id);
            if (!reservation) {
                throw new Error("Réservation non trouvée");
            }
            return reservation;
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération réservation: ${message}`);
        }
    },

    findReservationsByUserId: async (userId: number) => {
        try {
            return await reservationRepository.findReservationsByUserId(userId);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération réservations user: ${message}`);
        }
    },

    findReservationsByRoomId: async (roomId: number) => {
        try {
            return await reservationRepository.findReservationsByRoomId(roomId);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération réservations room: ${message}`);
        }
    },

    updateReservation: async (id: number, data: Partial<Reservation>) => {
        try {
            return await reservationRepository.updateReservation(id, data);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur mise à jour réservation: ${message}`);
        }
    },

    deleteReservation: async (id: number) => {
        try {
            return await reservationRepository.deleteReservation(id);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur suppression réservation: ${message}`);
        }
    },
};