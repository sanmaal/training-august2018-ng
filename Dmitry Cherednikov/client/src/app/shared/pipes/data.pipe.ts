import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '../models/data';

@Pipe({
  name: 'data',
})
export class DataPipe implements PipeTransform {
  transform(data: Data): string {
    return data.date ? data.date : 'Not yet catched';
  }
}