import { Request, Response } from 'express';

import { createOrder as serviceCreateOrder } from '../services';

export const createOrder = (req: Request, res: Response) => {
  const { products, decoded } = req.body;
  serviceCreateOrder(products, decoded.id)
    .then((result) => res.status(201).json(result));
};

export default {
  createOrder,
};