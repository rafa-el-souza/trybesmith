import { Orders } from '@prisma/client';

export type IProductsDBResponse = {
  id: number;
}[];

export type IOrdersDBResponse = Orders & {
  products: {
    id: number;
  }[];
};