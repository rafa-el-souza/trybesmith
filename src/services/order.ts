import orderModel from '../models/order';

export const createOrder = (
  products: number[],
  userId: number,
) => orderModel.create(products, userId);

export default {
  createOrder,
};