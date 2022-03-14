import express from 'express';

import orderController from './controllers/order';

import orderValidations from './controllers/validations/order';

import userValidations from './controllers/validations/user';

const { create } = orderController;

const { hasProducts, productsIsArray } = orderValidations;

const { hasToken, isLoggedIn } = userValidations;

const router = express.Router();

router.post(
  '/orders',
  hasToken,
  isLoggedIn,
  hasProducts,
  productsIsArray,
  create,
);

export default router;