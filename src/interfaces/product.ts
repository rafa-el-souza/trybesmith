import { Error } from './user';

export interface INewProduct {
  name: string,
  amount: string,
}

export interface IProduct extends INewProduct {
  id: number
} 

export interface IProductPayload {
  item: IProduct,
}

export interface IProductErrors {
  noName: Error,
  nameNotString: Error,
  shortName: Error,
  noAmount: Error,
  amountNotString: Error,
  shortAmount: Error,
}
