import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserFormsService {
  private _listners = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }
}
