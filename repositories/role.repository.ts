import { prisma } from "../src/db/prisma.ts";

interface Role {
    label: string;
}

export const roleRepository = {
    createRole: async (data: Role) => {
        return prisma.role.create({
            data,
            include: { users: true },
        });
    },

    findAllRoles: async () => {
        return prisma.role.findMany({
            include: { users: true },
        });
    },

    findRoleById: async (id: number) => {
        return prisma.role.findUnique({
            where: { id },
            include: { users: true },
        });
    },

    updateRole: async (id: number, data: Partial<Role>) => {
        return prisma.role.update({
            where: { id },
            data,
            include: { users: true },
        });
    },

    deleteRole: async (id: number) => {
        return prisma.role.delete({ where: { id } });
    },
};
