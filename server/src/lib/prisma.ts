// lib/prisma.ts
import { PrismaClient, Prisma } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

const options: Prisma.PrismaClientOptions = {
  // log: ['query', 'info', 'warn', 'error']
};

if (!global.prisma) {
  global.prisma = new PrismaClient(options);
}

export default global.prisma;

export { Prisma };
