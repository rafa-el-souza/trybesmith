/* eslint-disable max-lines-per-function */
import { NextFunction, Request, Response } from 'express';
import { IncomingHttpHeaders } from 'http';

import jwt from 'jsonwebtoken';

import { Header, NewUser, UserErrors } from '../../interfaces/user';

const isNotString = (input: string) => typeof input !== 'string';
const isShort = (input: string, limit: number) => input.length <= limit;
const isNotNumber = (input: number) => typeof input !== 'number';
const isNotPositive = (input: number) => input <= 0;

const e: UserErrors = { // Refactor
  noUsername: { error: 'Username is required' },
  usernameNotString: { error: 'Username must be a string' },
  shortUsername: { error: 'Username must be longer than 2 characters' },
  noClasse: { error: 'Classe is required' },
  classeNotString: { error: 'Classe must be a string' },
  shortClasse: { error: 'Classe must be longer than 2 characters' },
  noLevel: { error: 'Level is required' },
  levelNotNumber: { error: 'Level must be a number' },
  levelNotPositive: { error: 'Level must be greater than 0' },
  noPassword: { error: 'Password is required' },
  passwordNotString: { error: 'Password must be a string' },
  shortPassword: { error: 'Password must be longer than 7 characters' },
  notToken: { error: 'Token not found' },
  invalidToken: { error: 'Invalid token' },
};

export default {
  hasUsername: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (!newUser.username) return res.status(400).json(e.noUsername);
    return next();
  },
  usernameIsString: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotString(newUser.username)) return res.status(422).json(e.usernameNotString);
    return next();
  },
  usernameNotShort: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isShort(newUser.username, 2)) return res.status(422).json(e.shortUsername);
    return next();
  },
  hasClasse: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (!newUser.classe) return res.status(400).json(e.noClasse);
    return next();
  },
  classeIsString: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotString(newUser.classe)) return res.status(422).json(e.classeNotString);
    return next();
  },
  classeNotShort: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isShort(newUser.classe, 2)) return res.status(422).json(e.shortClasse);
    return next();
  },
  hasLevel: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (!newUser.level && newUser.level !== 0) return res.status(400).json(e.noLevel);
    return next();
  },
  levelIsNumber: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotNumber(newUser.level)) return res.status(422).json(e.levelNotNumber);
    return next();
  },
  levelIsPositive: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotPositive(newUser.level)) return res.status(422).json(e.levelNotPositive);
    return next();
  },
  hasPassword: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (!newUser.password) return res.status(400).json(e.noPassword);
    return next();
  },
  passwordIsString: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotString(newUser.password)) return res.status(422).json(e.passwordNotString);
    return next();
  },
  passwordNotShort: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isShort(newUser.password, 7)) return res.status(422).json(e.shortPassword);
    return next();
  },
  hasToken: (req:Request, res: Response, next: NextFunction) => {
    const header = req.headers;
    const { authorization } = header;
    if (!authorization) return res.status(401).json(e.notToken);
    return next();
  },
  isLoggedIn: (req: Request, res: Response, next: NextFunction) => {
    const header: IncomingHttpHeaders = req.headers;
    const { authorization } = header as Header;
    const secret: string = process.env.JWT_SECRET || 'secret'; // Refactor
    // const decoded = jwt.verify(
    //   authorization, 
    //   secret, 
    //   { algorithms: ['HS256'] },
    //   (err, payload) => {
    //     if (err) return res.status(401).json(e.invalidToken);
    //     return payload;
    //   },
    // );
    try {
      const decoded = jwt.verify(
        authorization,
        secret,
        { algorithms: ['HS256'] },
      );
      console.log(decoded);
    } catch (err) {
      return res.status(401).json(e.invalidToken);
    }
    return next();
  },
};