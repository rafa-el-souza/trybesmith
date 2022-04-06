export enum Message {
  internal = 'Something went wrong...',
  notArrayOfNumbers = 'Products must be an array of numbers',
  empty = 'Products can\'t be empty',
  noProducts = 'Products is required',
  noName = 'Name is required',
  nameNotString = 'Name must be a string',
  shortName = 'Name must be longer than 2 characters',
  noAmount = 'Amount is required',
  amountNotString = 'Amount must be a string',
  shortAmount = 'Amount must be longer than 2 characters',
  noUsername = 'Username is required',
  usernameNotString = 'Username must be a string',
  shortUsername = 'Username must be longer than 2 characters',
  noClasse = 'Classe is required',
  classeNotString = 'Classe must be a string',
  shortClasse = 'Classe must be longer than 2 characters',
  noLevel = 'Level is required',
  levelNotNumber = 'Level must be a number',
  levelNotPositive = 'Level must be greater than 0',
  noPassword = 'Password is required',
  passwordNotString = 'Password must be a string',
  shortPassword = 'Password must be longer than 7 characters',
  notToken = 'Token not found',
  invalidToken = 'Invalid token',
  noOrder = 'Order not found',
}

export default Message;