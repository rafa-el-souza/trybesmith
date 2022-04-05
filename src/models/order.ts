import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = async (_products: number[], userId: number) => {
  const { id: orderId } = await prisma.orders.create({
    data: { userId },
    select: { id: true },
  });
  return prisma.products.updateMany({ // refactor transaction
    where: { id: { in: _products } },
    data: { orderId },
  })
    .then(() => ({ order: { userId, products: _products } }))
    .finally(async () => {
      await prisma.$disconnect();
    });
};

export default {
  create,
};