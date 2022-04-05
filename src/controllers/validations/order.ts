import { NextFunction, Request, Response } from 'express';

import { isArray } from 'util';
import { isEmptyArray } from '../../helpers';

export const hasProducts = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  if (!products) return res.status(400).json({ error: 'Products is required' });
  return next();
};

export const productsIsArray = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  if (isEmptyArray(products as number[])) {
    return res.status(422).json({ error: 'Products can\'t be empty' });
  }
  if (!isArray(products)) {
    return res.status(422).json({ error: 'Products must be an array of numbers' });
  }
  return next();
};

export default {
  hasProducts,
  productsIsArray,
};