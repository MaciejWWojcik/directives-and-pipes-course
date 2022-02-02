import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inBrackets'
})
export class InBracketsPipe implements PipeTransform {

  transform(value: string | number): string {
    return '(' + value + ')';
  }

}
