import { NextFunction, Request, Response } from 'express';
import { IncomingHttpHeaders } from 'http';
import jwt from 'jsonwebtoken';

import { isNotNumber, isNotPositive, isNotString, isShort } from '../../helpers';

import { Header, NewUser } from '../../interfaces';

import { DomainError, Message, StatusCode } from '../../errors';

export const hasUsername = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (!newUser.username) {
    return next(
      new DomainError(StatusCode.badRequest, Message.noUsername),
    );
  }
  return next();
};

export const usernameIsString = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (isNotString(newUser.username)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.usernameNotString),
    );
  }
  return next();
};

export const usernameNotShort = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (isShort(newUser.username, 2)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.shortUsername),
    );
  }
  return next();
};

export const hasClasse = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (!newUser.classe) {
    return next(
      new DomainError(StatusCode.badRequest, Message.noClasse),
    );
  }
  return next();
};

export const classeIsString = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (isNotString(newUser.classe)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.classeNotString),
    );
  }
  return next();
};

export const classeNotShort = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (isShort(newUser.classe, 2)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.shortClasse),
    );
  }
  return next();
};

export const hasLevel = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (!newUser.level && newUser.level !== 0) {
    return next(
      new DomainError(StatusCode.badRequest, Message.noLevel),
    );
  }
  return next();
};

export const levelIsNumber = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (isNotNumber(newUser.level)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.levelNotNumber),
    );
  }
  return next();
};

export const levelIsPositive = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (isNotPositive(newUser.level)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.levelNotPositive),
    );
  }
  return next();
};

export const hasPassword = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (!newUser.password) {
    return next(
      new DomainError(StatusCode.badRequest, Message.noPassword),
    );
  }
  return next();
};

export const passwordIsString = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (isNotString(newUser.password)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.passwordNotString),
    );
  }
  return next();
};

export const passwordNotShort = (req: Request, res: Response, next: NextFunction) => {
  const newUser: NewUser = req.body;
  if (isShort(newUser.password, 7)) {
    return next(
      new DomainError(StatusCode.unprocessable, Message.shortPassword),
    );
  }
  return next();
};

export const hasToken = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers;
  const { authorization } = header;
  if (!authorization) {
    return next(
      new DomainError(StatusCode.unauthorized, Message.notToken),
    );
  }
  return next();
};

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const header: IncomingHttpHeaders = req.headers;
  const { authorization } = header as Header;
  const secret: string = process.env.JWT_SECRET || 'secret'; // Refactor
  try {
    const decoded = jwt.verify(
      authorization,
      secret,
      { algorithms: ['HS256'] },
    );
    req.body = { ...req.body, decoded };
  } catch (err) {
    return next(
      new DomainError(StatusCode.unauthorized, Message.invalidToken),
    );
  }
  return next();
};

export default {
  hasUsername,
  usernameIsString,
  usernameNotShort,
  hasClasse,
  classeIsString,
  classeNotShort,
  hasLevel,
  levelIsNumber,
  levelIsPositive,
  hasPassword,
  passwordIsString,
  passwordNotShort,
  hasToken,
  isLoggedIn,
};