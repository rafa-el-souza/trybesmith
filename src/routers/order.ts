import express from 'express';

import { createOrder, getOrderById } from '../controllers';

import {
  hasProducts,
  productsIsArray,
  hasToken,
  isLoggedIn,
  orderExists,
} from '../middlewares/validations';

const orderRouter = express.Router();

orderRouter.post(
  '/orders',
  hasToken,
  isLoggedIn,
  hasProducts,
  productsIsArray,
  createOrder,
);

orderRouter.get(
  '/orders/:id',
  hasToken,
  isLoggedIn,
  orderExists,
  getOrderById,
);

export { orderRouter };
export default orderRouter;