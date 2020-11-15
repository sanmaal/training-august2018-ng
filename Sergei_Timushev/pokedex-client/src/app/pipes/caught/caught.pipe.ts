import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caught'
})
export class CaughtPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? "Caught" : "Not Caught"
  }

}
