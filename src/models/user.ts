import { OkPacket } from 'mysql2';
import { Credentials, LoginPayload, NewUser } from '../interfaces/user';

import connection from './connection';
import q from './queries';

export default {
  subscription: (newUser: NewUser) => {
    const { username, classe, level, password } = newUser;
    return connection.execute(q.newUserQuery, [username, classe, level, password])
      .then(([result]) => ({ id: (result as OkPacket).insertId })); // Refactor
  },
  login: (credentials: Credentials) => {
    const { username, password } = credentials;
    return connection.execute(q.loginQuery, [username, password])
      .then(([result]) => result as LoginPayload[] | []);
  },
};