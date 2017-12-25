import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ErrorResponse} from "./model/ErrorResponse";

@Injectable()
export class ErrorService {

  error: ErrorResponse;

  constructor(private router: Router) { }

  public redirectToErrorPage(error: ErrorResponse): void {
    console.log("app error", error);
    this.error = error;
    this.router.navigate(['error']);
  }

}