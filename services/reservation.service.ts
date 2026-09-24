import { reservationRepository } from "../repositories/reservation.repository.ts";
import type { Reservation } from "../Dto/reservation.dto.ts";

export const reservationService = {
    createReservation: async (data: Reservation) => {
        try {
            const roomReservations = await reservationRepository.findReservationsByRoomId(data.roomId);

            for (let i = 0; i < roomReservations.length; i++) {
                const existingDebut = new Date(roomReservations[i].date_debut);
                const existingFin = new Date(roomReservations[i].date_fin);

                if(data.date_debut < existingFin && data.date_debut > existingDebut) {
                    throw new Error("Reservation impossible : Conflit avec les horaires d'une autre réservation");
                } else if (data.date_fin > existingDebut && data.date_fin < existingFin) {
                    throw new Error("Reservation impossible : Conflit avec les horaires d'une autre réservation");
                } else if (data.date_debut <= existingDebut && data.date_fin >= existingFin) {
                    throw new Error("Reservation impossible : Conflit avec les horaires d'une autre réservation");
                }
            }

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

        const reservationToModify = await reservationRepository.findReservationById(id);
        if (!reservationToModify) {
            throw new Error("Une erreur est survenue");
        }

        const roomId = data.roomId ?? reservationToModify.roomId;
        const date_debut = data.date_debut ?? new Date(reservationToModify.date_debut);
        const date_fin = data.date_fin ?? new Date(reservationToModify.date_fin);

        try {

            const roomReservations = await reservationRepository.findReservationsByRoomId(roomId);

            for (let i = 0; i < roomReservations.length; i++) {
                if (roomReservations[i].id === reservationToModify.id) {
                    continue;
                }

                const existingDebut = new Date(roomReservations[i].date_debut);
                const existingFin = new Date(roomReservations[i].date_fin);

                if(date_debut < existingFin && date_debut > existingDebut) {
                    throw new Error("Reservation impossible : Conflit avec les horaires d'une autre réservation");
                } else if (date_fin > existingDebut && date_fin < existingFin) {
                    throw new Error("Reservation impossible : Conflit avec les horaires d'une autre réservation");
                } else if (date_debut <= existingDebut && date_fin >= existingFin) {
                    throw new Error("Reservation impossible : Conflit avec les horaires d'une autre réservation");
                }
            }

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