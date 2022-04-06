export class DomainError extends Error {
  public error: string;

  public code: number;

  constructor(c: number, e: string) {
    super();
    this.code = c;
    this.error = e;
  }
}

export default DomainError;
