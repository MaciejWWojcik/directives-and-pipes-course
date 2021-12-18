import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserRole } from '../models/user-role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly role: BehaviorSubject<UserRole> = new BehaviorSubject<UserRole>(UserRole.BasicUser);

  get userRole$(): Observable<UserRole> {
    return this.role.asObservable();
  }

  changeRole(role: UserRole) {
    this.role.next(role);
  }
}
