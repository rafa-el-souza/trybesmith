import { NewUser, Credentials } from '../interfaces/user';

import userModel from '../models/user';

export const subscription = (newUser: NewUser) => userModel.subscription(newUser);

export const login = (credentials: Credentials) => userModel.login(credentials);

export default {
  subscription,
  login,
};