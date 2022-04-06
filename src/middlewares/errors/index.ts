import { NextFunction, Request, Response } from 'express';
import { DomainError, Message, StatusCode } from '../../errors';

export const ErrorHandler = (
  err: DomainError,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  console.error(err);
  const status = err.code || StatusCode.internal;
  const error = (status === StatusCode.internal)
    ? Message.internal
    : err.error;
  return res.status(status).json({ error });
};

export default {
  ErrorHandler,
};