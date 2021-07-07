import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'boolToString'})
export class BoolToStringPipe implements PipeTransform {
  transform(meaning: boolean): string {
    if (meaning === true) {
      return 'yes';
    }
    if (meaning === false) {
      return 'no';
    }
  }
}
