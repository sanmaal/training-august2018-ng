import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor( private sessionService: SessionService ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.sessionService.getToken();

    if (token) {
      const headersUpdate = req.clone({
        headers: req.headers.set('x-access-token', `${token}`),
      });
      return next.handle(headersUpdate);
    } else {
      return next.handle(req);
    }
  }
}
