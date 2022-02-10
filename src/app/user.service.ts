import { Injectable } from '@angular/core';
import { Account, User } from './user';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    name: 'John',
    lastname: 'Doe',
    account: Account.Premium,
  };

  getUser(): Observable<User> {
    // mock http call, by returning an observable, that returns value after 1 second:
    return of(this.user).pipe(
      delay(1000),
    );
  }
}
