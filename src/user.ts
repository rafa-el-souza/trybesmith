import express from 'express';

import userController from './controllers/user';

import userValidations from './controllers/validations/user';

const { subscription, login } = userController;

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

router.post(
  '/login',
  hasUsername,
  hasPassword,
  login,
);

export default router;