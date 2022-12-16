import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  private token!: string;
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    const tmpToken = localStorage.getItem('token');
    this.token = JSON.parse(tmpToken as string);
    if (this.token) {
      const requestWithToken = req.clone({ headers: req.headers.set("Authorization", "Bearer " + this.token) });
      console.log(requestWithToken);
      return next.handle(requestWithToken);
    }
    return next.handle(req);
  }
}
