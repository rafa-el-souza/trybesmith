import { NextFunction, Request, Response } from 'express';

import { isArray } from 'util';
import { isEmptyArray } from '../../helpers';
import { DomainError, Message, StatusCode } from '../../errors';

export const hasProducts = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  // if (!products) return res.status(400).json({ error: 'Products is required' });
  if (!products) return next(new DomainError(StatusCode.badRequest, Message.noProducts));
};

export const productsIsArray = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  if (isEmptyArray(products as number[])) {
    // return res.status(422).json({ error: 'Products can\'t be empty' });
    return next(new DomainError(StatusCode.unprocessable, Message.empty));
  }
  if (!isArray(products)) {
    return next(new DomainError(StatusCode.unprocessable, Message.notArrayOfNumbers));
    // return res.status(422).json({ error: 'Products must be an array of numbers' });
  }
};

export default {
  hasProducts,
  productsIsArray,
};