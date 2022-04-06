import { Request, Response } from 'express';

import {
  createOrder as serviceCreateOrder,
  getAllOrders as serviceGetAllOrders,
} from '../services';

export const createOrder = (req: Request, res: Response) => {
  const { products, decoded } = req.body;
  serviceCreateOrder(products, decoded.id)
    .then((result) => res.status(201).json(result));
};

export const getOrderById = (req: Request, res: Response) => res.status(200).json(res.locals.order);

export const getAllOrders = (req: Request, res: Response) => serviceGetAllOrders()
  .then((result) => res.status(200).json(result));

export default {
  createOrder,
  getOrderById,
};