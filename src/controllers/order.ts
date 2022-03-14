import { Request, Response } from 'express';

import orderService from '../services/order';

export default {
  create: (req: Request, res: Response) => {
    const { products, decoded } = req.body;
    orderService.create(products, decoded.id)
      .then((result) => res.status(201).json(result));
  },
};