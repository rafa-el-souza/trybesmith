// import express, { Request, Response, NextFunction } from 'express';
import express from 'express';

import userController from './controllers/user';

import userValidations from './controllers/validations/user';

const { subscription } = userController;

const {
  hasUsername,
  usernameIsString,
  usernameNotShort,
  hasClasse,
  classeIsString,
  classeNotShort,
  levelIsPositive,
  hasLevel,
  levelIsNumber,
  hasPassword,
  passwordIsString,
  passwordNotShort,
} = userValidations;

const router = express.Router();

router.post(
  '/users',
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
  subscription,
);

export default router;