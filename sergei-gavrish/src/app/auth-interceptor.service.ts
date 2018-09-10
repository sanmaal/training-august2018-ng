import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenId = localStorage.getItem('tokenId');

    if (tokenId) {
      const headersUpdate = req.clone({
        headers: req.headers.set('x-access-token', `${tokenId}`),
      });
      return next.handle(headersUpdate);
    } else {
      return next.handle(req);
    }
  }
}
