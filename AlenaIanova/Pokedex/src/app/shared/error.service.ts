import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError<T> () {
    return (error: any): Observable<any> => {
      if (error.error.error) {
        return of(error.error);
      } else {
        return of({error: 'Something wrong was happen. Please try again.'});
      }
    };
  }
}
