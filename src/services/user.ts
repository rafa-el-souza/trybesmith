import { NewUser, Credentials } from '../interfaces';

import userModel from '../models/user';

export const subscription = (newUser: NewUser) => userModel.subscription(newUser);

export const login = (credentials: Credentials) => userModel.login(credentials);

export default {
  subscription,
  login,
};