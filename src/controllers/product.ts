import { Request, Response } from 'express';

import {
  createProduct as serviceCreateProduct,
  getAllProducts as serviceGetAllProducts,
} from '../services';

import { INewProduct, IProduct, IProductPayload } from '../interfaces';

export const createProduct = (req: Request, res: Response) => {
  const newProduct: INewProduct = req.body;
  serviceCreateProduct(newProduct)
    .then((result: IProductPayload) => res.status(201).json(result));
};

export const getAllProducts = (req: Request, res: Response) => {
  serviceGetAllProducts()
    .then((result: IProduct[]) => res.status(200).json(result));
};

export default {
  createProduct,
  getAllProducts,
};