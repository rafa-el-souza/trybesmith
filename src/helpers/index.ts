import { IOrdersDBResponse, IProductsDBResponse } from '../interfaces/order';

export const isNotString = (input: string) => typeof input !== 'string';

export const isShort = (input: string, limit: number) => input.length <= limit;

export const isNotNumber = (input: number) => typeof input !== 'number';

export const isNotPositive = (input: number) => input <= 0;

export const isEmptyArray = (array: number[]): boolean => array.length === 0;

export const flattenProducts = (
  products: IProductsDBResponse,
) => products.map((product) => product.id);

export const formatOrder = (order: IOrdersDBResponse) => {
  const products = flattenProducts(order?.products);
  return { ...order, products };
};
export default {
  isNotString,
  isShort,
  isNotNumber,
  isNotPositive,
  isEmptyArray,
  flattenProducts,
  formatOrder,
};