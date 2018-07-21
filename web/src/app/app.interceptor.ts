import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/AuthService';
import { Router } from '@angular/router';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  private static AUTH_HEADER_NAME = 'authorization';

  constructor(private router: Router, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = this.interceptRequest(request);

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.interceptResponse(event);
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.interceptError(err);
        }
      }));
  }

  interceptRequest(request: HttpRequest<any>) {
    request = this.addAuthorizationTokenIfExist(request);
    return request;
  }

  interceptResponse(res: HttpResponse<any>) {
    this.saveAuthorizationTokenIfExist(res);
  }

  interceptError(err: HttpErrorResponse) {
    console.log('intercept response error', err);

    // TODO ADD EXPIRED TOKENS HANDLER

    if (err.status === 401) {
      this.router.navigate(['/login']);
    }
  }

  addAuthorizationTokenIfExist(request: HttpRequest<any>) {
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: this.authService.getToken()
        }
      });
    }

    return request;
  }

  saveAuthorizationTokenIfExist(res: HttpResponse<any>) {
    const authToken = res.headers.get(AppInterceptor.AUTH_HEADER_NAME);
    if (authToken) {
      this.authService.setToken(authToken);
    }
  }

}
