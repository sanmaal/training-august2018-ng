import { Pipe, PipeTransform } from '@angular/core';

import { Caughtable } from '../../../../domain/Caughtable';

@Pipe({
  name: 'caught'
})
export class CaughtPipe implements PipeTransform {

  transform(obj: Caughtable): string {
    return obj.caught ? "Caught" : "Not Caught"
  }
}
