export const isNotString = (input: string) => typeof input !== 'string';
export const isShort = (input: string, limit: number) => input.length <= limit;
export const isNotNumber = (input: number) => typeof input !== 'number';
export const isNotPositive = (input: number) => input <= 0;
export const isEmptyArray = (array: number[]): boolean => array.length === 0;

export default {
  isNotString,
  isShort,
  isNotNumber,
  isNotPositive,
  isEmptyArray,
};