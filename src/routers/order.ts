import express from 'express';

import { createOrder } from '../controllers';

import { hasProducts, productsIsArray, hasToken, isLoggedIn } from '../controllers/validations';

const orderRouter = express.Router();

orderRouter.post(
  '/orders',
  hasToken,
  isLoggedIn,
  hasProducts,
  productsIsArray,
  createOrder,
);

export { orderRouter };
export default orderRouter;