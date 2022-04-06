import { NextFunction, Request, Response } from 'express';

import { isArray } from 'util';

import { isEmptyArray } from '../../helpers';

import { DomainError, Message, StatusCode } from '../../errors';

export const hasProducts = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  if (!products) return next(new DomainError(StatusCode.badRequest, Message.noProducts));
  return next();
};

export const productsIsArray = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  if (isEmptyArray(products as number[])) {
    return next(new DomainError(StatusCode.unprocessable, Message.empty));
  }
  if (!isArray(products)) {
    return next(new DomainError(StatusCode.unprocessable, Message.notArrayOfNumbers));
  }
  return next();
};

export default {
  hasProducts,
  productsIsArray,
};