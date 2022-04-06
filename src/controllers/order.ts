import { Request, Response } from 'express';

import {
  createOrder as serviceCreateOrder,
  getOrderById as serviceGetOrderById,
} from '../services';

export const createOrder = (req: Request, res: Response) => {
  const { products, decoded } = req.body;
  serviceCreateOrder(products, decoded.id)
    .then((result) => res.status(201).json(result));
};

export const getOrderById = (req: Request, res: Response) => {
  const { id } = req.params;
  serviceGetOrderById(Number(id))
    .then((result) => res.status(201).json(result));
};

export default {
  createOrder,
  getOrderById,
};