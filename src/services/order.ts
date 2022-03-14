import orderModel from '../models/order';

export default {
  create: (products: number[], userId: number) => orderModel.create(products, userId),
};