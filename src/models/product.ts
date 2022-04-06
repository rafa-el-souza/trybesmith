import { PrismaClient } from '@prisma/client';

import { INewProduct, IProduct } from '../interfaces';

const prisma = new PrismaClient();

export const getAllProducts = () => prisma.products.findMany({
  select: {
    id: true,
    name: true,
    amount: true,
  },
})
  .then((result: IProduct[]) => result)
  .finally(async () => {
    await prisma.$disconnect();
  });

export const createProduct = ({ name, amount }: INewProduct) => prisma.products.create({
  data: { name, amount },
  select: {
    id: true,
    name: true,
    amount: true,
  },
})
  .then((result: IProduct) => ({ item: { ...result } }))
  .finally(async () => {
    await prisma.$disconnect();
  });

export default {
  getAllProducts,
  createProduct,
};