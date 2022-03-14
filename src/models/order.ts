import { ResultSetHeader, FieldPacket } from 'mysql2/promise';

import connection from './connection';
import q from './queries';

type UpdateProductPromise = Promise<[ResultSetHeader, FieldPacket[]]>;

export default {
  create: async (products: number[], userId: number) => {
    const createOrder: [ResultSetHeader, FieldPacket[]] = await connection
      .execute(q.createOrderQuery, [userId]);
    const orderId = createOrder[0].insertId;
    const promises = products
      .map((productId): UpdateProductPromise => connection
        .execute(q.updateProductQuery, [orderId, productId]));
    return Promise.all(promises)
      .then(() => ({ order: { userId, products } }));
  },
};