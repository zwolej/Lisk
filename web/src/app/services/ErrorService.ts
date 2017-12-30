import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorResponse } from './lisk/model/ErrorResponse';

@Injectable()
export class ErrorService {

  error: ErrorResponse;

  constructor(private router: Router) {
  }

  public redirectToErrorPage(error: ErrorResponse): void {
    console.log('ErrorService naviagte to error page with msg', error);
    this.error = error;
    this.router.navigate(['error']);
  }

}
