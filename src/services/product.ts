import { INewProduct } from '../interfaces';

import {
  getAllProducts as modelGetAllProducts,
  createProduct as modelCreateProduct,
} from '../models';

export const createProduct = (newProduct: INewProduct) => modelCreateProduct(newProduct);

export const getAllProducts = () => modelGetAllProducts();

export default {
  createProduct,
  getAllProducts,
};