import { prisma } from "../src/db/prisma.ts";

interface Room {
    name: string;
    capacity: number;
}

export const roomRepository = {
    createRoom: async (data: Room) => {
        return prisma.room.create({ data });
    },

    findAllRooms: async () => {
        return prisma.room.findMany({
            include: { reservations: true },
        });
    },

    findRoomById: async (id: number) => {
        return prisma.room.findUnique({
            where: { id },
            include: { reservations: true },
        });
    },

    updateRoom: async (id: number, data: Partial<Room>) => {
        return prisma.room.update({
            where: { id },
            data,
            include: { reservations: true },
        });
    },

    deleteRoom: async (id: number) => {
        return prisma.room.delete({ where: { id } });
    },
};
