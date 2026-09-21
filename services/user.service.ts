import { userRepository } from "../repositories/user.repository.ts";
import type { User } from "../Dto/user.dto.ts";

export const userService = {
    createUser: async (data: User) => {
        try {
            const existingUser = await userRepository.findUserByEmail(data.email);
            if(existingUser) {
                throw new Error("Cet email est déjà utilisé")
            }
            return await userRepository.createUser(data);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur création user: ${message}`);
        }
    },

    findAllUsers: async () => {
        try {
            return await userRepository.findAllUsers();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération users: ${message}`);
        }
    },

    findUserById: async (id: number) => {
        try {
            const user = await userRepository.findUserById(id);
            if (!user) {
                throw new Error("Utilisateur non trouvé");
            }
            return user;
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération user: ${message}`);
        }
    },

    updateUser: async (id: number, data: Partial<User>) => {
        try {
            return await userRepository.updateUser(id, data);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur mise à jour user: ${message}`);
        }
    },

    deleteUser: async (id: number) => {
        try {
            return await userRepository.deleteUser(id);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur suppression user: ${message}`);
        }
    },
}