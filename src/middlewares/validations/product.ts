import { NextFunction, Request, Response } from 'express';

import { isNotString, isShort } from '../../helpers';

import { INewProduct } from '../../interfaces';

import { DomainError, Message, StatusCode } from '../../errors';

export const hasName = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: INewProduct = req.body;
  if (!newProduct.name) {
    return next(
      new DomainError(StatusCode.badRequest, Message.noName),
    );
  }
  return next();
};
export const nameIsString = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: INewProduct = req.body;
  if (isNotString(newProduct.name)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.nameNotString),
    );
  }
  return next();
};
export const nameNotShort = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: INewProduct = req.body;
  if (isShort(newProduct.name, 2)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.shortName),
    );
  }
  return next();
};
export const hasAmount = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: INewProduct = req.body;
  if (!newProduct.amount) return next(new DomainError(StatusCode.badRequest, Message.noAmount));
  return next();
};
export const amountIsString = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: INewProduct = req.body;
  if (isNotString(newProduct.amount)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.amountNotString),
    );
  }
  return next();
};
export const amountNotShort = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: INewProduct = req.body;
  if (isShort(newProduct.amount, 2)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.shortAmount),
    );
  }
  return next();
};

export default {
  hasName,
  nameIsString,
  nameNotShort, 
  hasAmount,
  amountIsString,
  amountNotShort,
};