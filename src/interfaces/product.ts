import { Error } from './user';

export interface NewProduct {
  name: string,
  amount: string,
}

export interface Product extends NewProduct {
  id: number
} 

export interface ProductPayload {
  item: Product,
}

export interface ProductErrors {
  noName: Error,
  nameNotString: Error,
  shortName: Error,
  noAmount: Error,
  amountNotString: Error,
  shortAmount: Error,
}