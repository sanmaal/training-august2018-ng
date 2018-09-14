import { Pipe, PipeTransform } from '@angular/core';
import { Catch } from '../models/Catch';

@Pipe({
  name: 'catch',
})
export class CatchPipe implements PipeTransform {
  transform(date: Catch): string {
    return date ? 'catched' : 'catch';
  }
}