import { prisma } from "../src/db/prisma.ts";
import type { Reservation } from "../Dto/reservation.dto.ts"

export const reservationRepository = {
    createReservation: async (data: Reservation) => {
        return prisma.reservation.create({
            data,
            include: { user: true, room: true },
        });
    },

    findAllReservations: async () => {
        return prisma.reservation.findMany({
            include: { user: true, room: true },
        });
    },

    findReservationById: async (id: number) => {
        return prisma.reservation.findUnique({
            where: { id },
            include: { user: true, room: true },
        });
    },

    findReservationsByUserId: async (userId: number) => {
        return prisma.reservation.findMany({
            where: { userId },
            include: { user: true, room: true },
        });
    },

    findReservationsByRoomId: async (roomId: number) => {
        return prisma.reservation.findMany({
            where: { roomId },
            include: { user: true, room: true },
        });
    },

    updateReservation: async (id: number, data: Partial<Reservation>) => {
        return prisma.reservation.update({
            where: { id },
            data,
            include: { user: true, room: true },
        });
    },

    deleteReservation: async (id: number) => {
        return prisma.reservation.delete({ where: { id } });
    },
};
