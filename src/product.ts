import express from 'express';

import productController from './controllers/product';

import productValidations from './controllers/validations/product';

import userValidations from './controllers/validations/user';

const { create } = productController;

const { hasToken, isLoggedIn } = userValidations;

const {
  hasName,
  nameIsString,
  nameNotShort,
  hasAmount,
  amountIsString,
  amountNotShort,
} = productValidations;

const router = express.Router();

router.post(
  '/products',
  hasToken,
  isLoggedIn,
  hasName,
  nameIsString,
  nameNotShort,
  hasAmount,
  amountIsString,
  amountNotShort,
  create,
);

export default router;