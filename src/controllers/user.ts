import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import 'dotenv/config';

import {
  Credentials,
  LoginPayload,
  NewUser,
  NewUserPayload,
  NewUserResponse,
} from '../interfaces/user';

import {
  subscription as serviceSubscription,
  login as serviceLogin,
} from '../services';

export const subscription = (req: Request, res: Response) => {
  const newUser: NewUser = req.body;
  const newUserResponse: NewUserResponse = { username: newUser.username };
  serviceSubscription(newUser)
    .then((result) => {
      const secret: string = process.env.JWT_SECRET || 'secret'; // Refactor
      const payload: NewUserPayload = { ...newUserResponse, ...result };
      const token: string = jwt.sign(payload, secret, { algorithm: 'HS256' });
      return res.status(201).json({ token });
    });
};

export const login = (req: Request, res: Response) => {
  const credentials: Credentials = req.body;
  serviceLogin(credentials)
    .then((result) => {
      if (!result[0]) return res.status(401).json({ error: 'Username or password invalid' });
      const secret: string = process.env.JWT_SECRET || 'secret'; // Refactor
      const payload: LoginPayload = result[0];
      const token: string = jwt.sign(payload, secret, { algorithm: 'HS256' });
      return res.status(200).json({ token });
    });
};

export default {
  subscription,
  login,
};