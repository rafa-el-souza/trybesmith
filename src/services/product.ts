import { NewProduct } from '../interfaces/product';

import productModel from '../models/product';

export const createProduct = (newProduct: NewProduct) => productModel.create(newProduct);

export const getAllProducts = () => productModel.getAll();

export default {
  createProduct,
  getAllProducts,
};