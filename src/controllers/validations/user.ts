import { NextFunction, Request, Response } from 'express';

import { NewUser, UserErrors } from '../../interfaces/user';

const isNotString = (input: string) => typeof input !== 'string';
const isShort = (input: string, limit: number) => input.length <= limit;
const isNotNumber = (input: number) => typeof input !== 'number';
const isNotPositive = (input: number) => input <= 0;

const e: UserErrors = {
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
};

export default {
  hasUsername: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (!newUser.username) return res.status(400).json(e.noUsername);
    next();
  },
  usernameIsString: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotString(newUser.username)) return res.status(422).json(e.usernameNotString);
    next();
  },
  usernameNotShort: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isShort(newUser.username, 2)) return res.status(422).json(e.shortUsername);
    next();
  },
  hasClasse: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (!newUser.classe) return res.status(400).json(e.noClasse);
    next();
  },
  classeIsString: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotString(newUser.classe)) return res.status(422).json(e.classeNotString);
    next();
  },
  classeNotShort: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isShort(newUser.classe, 2)) return res.status(422).json(e.shortClasse);
    next();
  },
  hasLevel: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (!newUser.level && newUser.level !== 0) return res.status(400).json(e.noLevel);
    next();
  },
  levelIsNumber: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotNumber(newUser.level)) return res.status(422).json(e.levelNotNumber);
    next();
  },
  levelIsPositive: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotPositive(newUser.level)) return res.status(422).json(e.levelNotPositive);
    next();
  },
  hasPassword: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (!newUser.password) return res.status(400).json(e.noPassword);
    next();
  },
  passwordIsString: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isNotString(newUser.password)) return res.status(422).json(e.passwordNotString);
    next();
  },
  passwordNotShort: (req: Request, res: Response, next: NextFunction) => {
    const newUser: NewUser = req.body;
    if (isShort(newUser.password, 7)) return res.status(422).json(e.shortPassword);
    next();
  },
};