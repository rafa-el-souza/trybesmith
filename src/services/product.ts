// import { NewUser, Credentials } from '../interfaces/user';

import { NewProduct } from '../interfaces/product';

import productModel from '../models/product';

export default {
  create: (newProduct: NewProduct) => productModel.create(newProduct),
};