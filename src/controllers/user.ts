import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import 'dotenv/config';

import { Credentials, LoginPayload, NewUser, NewUserPayload } from '../interfaces/user';

import userService from '../services/user';

export default {
  subscription: (req: Request, res: Response) => {
    const newUser: NewUser = req.body;
    userService.subscription(newUser)
      .then((result) => {
        const secret: string = process.env.JWT_SECRET || 'secret'; // Refactor
        const payload: NewUserPayload = { ...newUser, ...result };
        const token: string = jwt.sign(payload, secret, { algorithm: 'HS256' });
        return res.status(201).json({ token });
      });
  },
  login: (req: Request, res: Response) => {
    const credentials: Credentials = req.body;
    userService.login(credentials)
      .then((result) => {
        if (!result[0]) return res.status(401).json({ error: 'Username or password invalid' });
        const secret: string = process.env.JWT_SECRET || 'secret'; // Refactor
        const payload: LoginPayload = result[0];
        const token: string = jwt.sign(payload, secret, { algorithm: 'HS256' });
        return res.status(200).json({ token });
      });
  },
};