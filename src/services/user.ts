import { NewUser, Credentials } from '../interfaces';

import {
  subscription as modelSubscription,
  login as modelLogin,
} from '../models';

export const subscription = (newUser: NewUser) => modelSubscription(newUser);

export const login = (credentials: Credentials) => modelLogin(credentials);

export default {
  subscription,
  login,
};