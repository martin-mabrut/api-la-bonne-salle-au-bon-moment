import { roleRepository } from "../repositories/role.repository.ts";
import type { Role } from "../Dto/role.dto.ts";

export const roleService = {
    createRole: async (data: Role) => {
        try {
            return await roleRepository.createRole(data);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur création rôle: ${message}`);
        }
    },

    findAllRoles: async () => {
        try {
            return await roleRepository.findAllRoles();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération rôles: ${message}`);
        }
    },

    findRoleById: async (id: number) => {
        try {
            const role = await roleRepository.findRoleById(id);
            if (!role) {
                throw new Error("Rôle non trouvé");
            }
            return role;
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur récupération rôle: ${message}`);
        }
    },

    updateRole: async (id: number, data: Partial<Role>) => {
        try {
            return await roleRepository.updateRole(id, data);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur mise à jour rôle: ${message}`);
        }
    },

    deleteRole: async (id: number) => {
        try {
            return await roleRepository.deleteRole(id);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Erreur suppression rôle: ${message}`);
        }
    },
};