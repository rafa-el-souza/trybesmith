import { NextFunction, Request, Response } from 'express';

import { isNotString, isShort } from '../../helpers';

import { NewProduct, ProductErrors } from '../../interfaces/product';

const e: ProductErrors = { // Refactor
  noName: { error: 'Name is required' },
  nameNotString: { error: 'Name must be a string' },
  shortName: { error: 'Name must be longer than 2 characters' },
  noAmount: { error: 'Amount is required' },
  amountNotString: { error: 'Amount must be a string' },
  shortAmount: { error: 'Amount must be longer than 2 characters' },
};

export const hasName = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: NewProduct = req.body;
  if (!newProduct.name) return res.status(400).json(e.noName);
  return next();
};
export const nameIsString = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: NewProduct = req.body;
  if (isNotString(newProduct.name)) return res.status(422).json(e.nameNotString);
  return next();
};
export const nameNotShort = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: NewProduct = req.body;
  if (isShort(newProduct.name, 2)) return res.status(422).json(e.shortName);
  return next();
};
export const hasAmount = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: NewProduct = req.body;
  if (!newProduct.amount) return res.status(400).json(e.noAmount);
  return next();
};
export const amountIsString = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: NewProduct = req.body;
  if (isNotString(newProduct.amount)) return res.status(422).json(e.amountNotString);
  return next();
};
export const amountNotShort = (req: Request, res: Response, next: NextFunction) => {
  const newProduct: NewProduct = req.body;
  if (isShort(newProduct.amount, 2)) return res.status(422).json(e.shortAmount);
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