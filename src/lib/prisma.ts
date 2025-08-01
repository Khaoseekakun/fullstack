import { PrismaClient } from "../generated/prisma";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: process.env.Node_ENV === 'development' ? ['error', 'warn'] : ['error'],

    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma