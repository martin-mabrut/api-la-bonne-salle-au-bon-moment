import { roomRepository } from "../repositories/room.repository.ts";
import type { Room } from "../Dto/room.dto.ts";

export const roomService = {
    createRoom: async (data: Room) => {
        try {
            return await roomRepository.createRoom(data);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur création room: ${message}`);
        }
    },

    findAllRooms: async () => {
        try {
            return await roomRepository.findAllRooms();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération rooms: ${message}`);
        }
    },

    findRoomById: async (id: number) => {
        try {
            const room = await roomRepository.findRoomById(id);
            if (!room) {
                throw new Error("Salle non trouvée");
            }
            return room;
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération room: ${message}`);
        }
    },

    updateRoom: async (id: number, data: Partial<Room>) => {
        try {
            return await roomRepository.updateRoom(id, data);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur mise à jour room: ${message}`);
        }
    },

    deleteRoom: async (id: number) => {
        try {
            return await roomRepository.deleteRoom(id);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur suppression room: ${message}`);
        }
    },
};