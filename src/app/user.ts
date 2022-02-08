export enum Account {
  Premium,
  Standard,
  Trial,
}

export interface User {
  name: string;
  lastname: string;
  account: Account;
}
