import { Request, Response } from 'express';

import {
  createProduct as serviceCreateProduct,
  getAllProducts as serviceGetAllProducts,
} from '../services';

import { NewProduct } from '../interfaces';

export const createProduct = (req: Request, res: Response) => {
  const newProduct: NewProduct = req.body;
  serviceCreateProduct(newProduct)
    .then((result) => res.status(201).json(result));
};

export const getAllProducts = (req: Request, res: Response) => {
  serviceGetAllProducts()
    .then((result) => res.status(200).json(result));
};

export default {
  createProduct,
  getAllProducts,
};