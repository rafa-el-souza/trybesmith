import {
  createOrder as modelCreateOrder,
  getOrderById as modelGetOrderById,
} from '../models';

export const createOrder = (
  products: number[],
  userId: number,
) => modelCreateOrder(products, userId);

export const getOrderById = (
  id: number,
) => modelGetOrderById(id);

export default {
  createOrder,
  getOrderById,
};