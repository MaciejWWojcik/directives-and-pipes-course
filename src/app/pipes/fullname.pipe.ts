import { Pipe, PipeTransform } from '@angular/core';
import { Account, User } from '../user';

@Pipe({
  name: 'fullname'
})
export class FullNamePipe implements PipeTransform {

  transform(user: User): string {
    return `${user.name} ${user.lastname}`
  }

}
