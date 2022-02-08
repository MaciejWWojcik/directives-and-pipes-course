import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inBrackets'
})
export class BracketsPipe implements PipeTransform {

  transform(value: string | number): string {
    return '(' + value + ')';
  }

}
