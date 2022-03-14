import { NextFunction, Request, Response } from 'express';
import { isArray } from 'util';

// const isArrayOfNumbers = (products: number[]): boolean => products
//   .every((product) => typeof product === 'number');

const isEmptyArray = (array: number[]): boolean => array.length === 0;

export default {
  hasProducts: (req: Request, res: Response, next: NextFunction) => {
    const { products } = req.body;
    if (!products) return res.status(400).json({ error: 'Products is required' });
    return next();
  },
  productsIsArray: (req: Request, res: Response, next: NextFunction) => {
    const { products } = req.body;
    if (isEmptyArray(products as number[])) {
      return res.status(422).json({ error: 'Products can\'t be empty' });
    }
    if (!isArray(products)) {
      return res.status(422).json({ error: 'Products must be an array of numbers' });
    }
    return next();
  },
};