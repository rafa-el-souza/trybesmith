import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOrder = async (_products: number[], userId: number) => {
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

export const getOrderById = (id: number) => prisma.orders.findFirst({
  where: { id },
  include: {
    products: {
      select: { id: true },
    },
  },
})
  .then((result) => {
    if (!result) return result;
    const products = result?.products.map((product) => product.id);
    return { ...result, products };
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default {
  createOrder,
  getOrderById,
};