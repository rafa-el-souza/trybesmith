import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import { NewUser, NewUserPayload } from '../interfaces/user';

import userService from '../services/user';

export default {
  subscription: (req: Request, res: Response) => {
    const newUser: NewUser = req.body;
    userService.subscription(newUser)
      .then((result) => {
        const secret: string = process.env.JWT_SECRET || ''; // ?
        const payload: NewUserPayload = { ...newUser, ...result };
        const token: string = jwt.sign(payload, secret, { algorithm: 'HS256' });
        return res.status(201).json({ token });
      });
  },
};