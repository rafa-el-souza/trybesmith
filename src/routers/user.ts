import express from 'express';

import { subscription, login } from '../controllers';

import {
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
  passwordNotShort } from '../controllers/validations';

const userRouter = express.Router();

userRouter.post(
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

userRouter.post(
  '/login',
  hasUsername,
  hasPassword,
  login,
);

export { userRouter };
export default userRouter;