// import { IncomingHttpHeaders } from 'http';

import { IncomingHttpHeaders } from 'http';

export interface NewUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface NewUserResponse {
  username: string,
}

export interface NewUserPayload extends NewUserResponse {
  id: number,
}

export interface Error {
  error: string
}

export interface UserErrors {
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
  notToken: Error,
  invalidToken: Error
}

export interface Credentials {
  username: string,
  password: string
}

export interface LoginPayload {
  id: number,
  username: string
}

export interface Header extends IncomingHttpHeaders {
  authorization: string
}

export interface UpdatedRequest extends Request {
  decoded: string
}

export interface IId {
  id: number
}

export interface IUsers {
  username: string;
  password: string;
  level: number;
  id: number
}