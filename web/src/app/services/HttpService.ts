import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { HttpHeaders } from '@angular/common/http/src/headers';

@Injectable()
export class HttpService extends HttpClient {

  private static API_BASE = '/api/';

  private origin: string;

  constructor(handler: HttpHandler, @Optional() @Inject(APP_BASE_HREF) origin: string) {
    super(handler);
    this.origin = origin;
  }

  get<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
  }): Observable<T> {
    return super.get<T>(this.handleUrlForServerSideRendering(url), options);
  }

  post<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
  }): Observable<T> {
    return super.post<T>(this.handleUrlForServerSideRendering(url), body, options);
  }

  put<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
  }): Observable<T> {
    return super.put<T>(this.handleUrlForServerSideRendering(url), body, options);
  }

  private handleUrlForServerSideRendering(url: string) {
    const origin = (this.origin ? this.origin : '');
    console.log('create ur' +
      'l ' + origin + ' ' + url);
    return origin + HttpService.API_BASE + url;
  }

}
