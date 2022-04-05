import { PrismaClient } from '@prisma/client';

import { NewProduct } from '../interfaces/product';

const prisma = new PrismaClient();

export const getAllProducts = () => prisma.products.findMany({
  select: {
    id: true,
    name: true,
    amount: true,
  },
})
  .then((result) => result)
  .finally(async () => {
    await prisma.$disconnect();
  });

export const createProduct = ({ name, amount }: NewProduct) => prisma.products.create({
  data: { name, amount },
  select: {
    id: true,
    name: true,
    amount: true,
  },
})
  .then((result) => ({ item: { ...result } }))
  .finally(async () => {
    await prisma.$disconnect();
  });

export default {
  getAllProducts,
  createProduct,
};