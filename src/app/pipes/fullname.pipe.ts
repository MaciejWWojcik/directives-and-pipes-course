import { Pipe, PipeTransform } from '@angular/core';
import { Account, User } from '../user';

@Pipe({
  name: 'fullname'
})
export class FullNamePipe implements PipeTransform {

  transform(): string {
    // TODO implement transformation function
    // TODO return a value that includes both name and lastname of the user
    return '';
  }

}
