import express from 'express';

import { createProduct, getAllProducts } from '../controllers';

import {
  hasName,
  nameIsString,
  nameNotShort,
  hasAmount,
  amountIsString,
  amountNotShort,
  hasToken, isLoggedIn } from '../middlewares/validations';

const productRouter = express.Router();

productRouter.post(
  '/products',
  hasToken,
  isLoggedIn,
  hasName,
  nameIsString,
  nameNotShort,
  hasAmount,
  amountIsString,
  amountNotShort,
  createProduct,
);

productRouter.get(
  '/products',
  hasToken,
  isLoggedIn,
  getAllProducts,
);

export { productRouter };
export default productRouter;