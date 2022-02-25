import { NewUser } from '../interfaces/user';

import userModel from '../models/user';

export default {
  subscription: (newUser: NewUser) => userModel.subscription(newUser),
};