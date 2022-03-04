import { NextFunction, Request, Response } from 'express';
import { NewProduct, ProductErrors } from '../../interfaces/product';

// import { NewUser } from '../../interfaces/user';

const isNotString = (input: string) => typeof input !== 'string'; // Refactor
const isShort = (input: string, limit: number) => input.length <= limit;

const e: ProductErrors = { // Refactor
  noName: { error: 'Name is required' },
  nameNotString: { error: 'Name must be a string' },
  shortName: { error: 'Name must be longer than 2 characters' },
  noAmount: { error: 'Amount is required' },
  amountNotString: { error: 'Amount must be a string' },
  shortAmount: { error: 'Amount must be longer than 2 characters' },
};

export default {
  hasName: (req: Request, res: Response, next: NextFunction) => {
    const newProduct: NewProduct = req.body;
    if (!newProduct.name) return res.status(400).json(e.noName);
    next();
  },
  nameIsString: (req: Request, res: Response, next: NextFunction) => {
    const newProduct: NewProduct = req.body;
    if (isNotString(newProduct.name)) return res.status(422).json(e.nameNotString);
    next();
  },
  nameNotShort: (req: Request, res: Response, next: NextFunction) => {
    const newProduct: NewProduct = req.body;
    if (isShort(newProduct.name, 2)) return res.status(422).json(e.shortName);
    next();
  },
  hasAmount: (req: Request, res: Response, next: NextFunction) => {
    const newProduct: NewProduct = req.body;
    if (!newProduct.amount) return res.status(400).json(e.noAmount);
    next();
  },
  amountIsString: (req: Request, res: Response, next: NextFunction) => {
    const newProduct: NewProduct = req.body;
    if (isNotString(newProduct.amount)) return res.status(422).json(e.amountNotString);
    next();
  },
  amountNotShort: (req: Request, res: Response, next: NextFunction) => {
    const newProduct: NewProduct = req.body;
    if (isShort(newProduct.amount, 2)) return res.status(422).json(e.shortAmount);
    next();
  },
};