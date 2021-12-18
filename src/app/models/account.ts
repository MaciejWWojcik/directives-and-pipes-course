import { UserRole } from './user-role';

export interface Account {
  username: string;
  role: UserRole;
  fullName: string;
}
