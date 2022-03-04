import { OkPacket } from 'mysql2';
import { NewProduct } from '../interfaces/product';
// import { Credentials, LoginPayload, NewUser } from '../interfaces/user';

import connection from './connection';
import q from './queries';

export default {
  create: (newProduct: NewProduct) => {
    const { name, amount } = newProduct;
    return connection.execute(q.createProductQuery, [name, amount])
      .then(([result]) => ({ item: { id: (result as OkPacket).insertId, name, amount } })); // Refactor
  },
};