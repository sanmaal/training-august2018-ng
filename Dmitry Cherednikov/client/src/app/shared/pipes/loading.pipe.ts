import { Pipe, PipeTransform } from '@angular/core';
import { Loading } from '../models/loading';

@Pipe({
  name: 'loading'
})
export class LoadingPipe implements PipeTransform {
  transform(loading: boolean): string {
    return loading ? 'Loading...' : 'Load';
  }
}