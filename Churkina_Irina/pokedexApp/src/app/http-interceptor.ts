import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { UserDataService } from "./user-data.service";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  private authToken = this.cookieService.get("currToken");
  constructor(
    public userDataService: UserDataService,
    private cookieService: CookieService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        token: `${this.authToken}`,
        "Content-Type": "application/json"
      }
    });
    return next.handle(request);
  }
}
