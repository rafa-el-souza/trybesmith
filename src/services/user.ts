import { NewUser, Credentials } from '../interfaces/user';

import userModel from '../models/user';

export default {
  subscription: (newUser: NewUser) => userModel.subscription(newUser),
  login: (credentials: Credentials) => userModel.login(credentials),
};