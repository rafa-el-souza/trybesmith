import { Request, Response } from 'express';
import { NewProduct } from '../interfaces/product';

// import { Credentials, LoginPayload, NewUser, NewUserPayload } from '../interfaces/user';

import productService from '../services/product';

export default {
  create: (req: Request, res: Response) => {
    const newProduct: NewProduct = req.body;
    productService.create(newProduct)
      .then((result) => res.status(201).json(result));
  },
  getAll: (req: Request, res: Response) => {
    productService.getAll()
      .then((result) => res.status(200).json(result));
  },
};