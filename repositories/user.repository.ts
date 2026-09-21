import { prisma } from "../src/db/prisma.ts";
import type { User } from "../Dto/user.dto.ts"

export const userRepository = {
    createUser: async (data: User) => {
        return prisma.user.create({ data });
    },

    findAllUsers: async () => {
        return prisma.user.findMany({
            include: { role: true },
        });
    },

    findUserById: async (id: number) => {
        return prisma.user.findUnique({
            where: { id },
            include: { role: true },
        });
    },

    findUserByEmail: async (email: string) => {
        return prisma.user.findUnique({
            where: { email },
            include: { role: true },
        });
    },

    updateUser: async (id: number, data: Partial<User>) => {
        return prisma.user.update({
            where: { id },
            data,
            include: { role: true },
        });
    },

    deleteUser: async (id: number) => {
        return prisma.user.delete({ where: { id } });
    },
};
