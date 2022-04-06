import {
  createOrder as modelCreateOrder,
  getOrderById as modelGetOrderById,
  getAllOrders as modelGetAllOrders,
} from '../models';

export const createOrder = (
  products: number[],
  userId: number,
) => modelCreateOrder(products, userId);

export const getOrderById = (
  id: number,
) => modelGetOrderById(id);

export const getAllOrders = () => modelGetAllOrders();

export default {
  createOrder,
  getOrderById,
};