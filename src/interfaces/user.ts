export interface NewUser{
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface NewUserPayload extends NewUser{
  id: number
}

export interface Error{
  error: string
}

export interface UserError{
  noUsername: Error,
  usernameNotString: Error,
  shortUsername: Error,
  noClasse: Error,
  classeNotString: Error,
  shortClasse: Error,
  noLevel: Error,
  levelNotNumber: Error,
  levelNotPositive: Error,
  noPassword: Error,
  passwordNotString: Error,
  shortPassword: Error,
}