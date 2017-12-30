import { Component } from '@angular/core';
import { ErrorService } from '../../services/ErrorService';

@Component({
  templateUrl: './500.error.component.html'
})
export class InternalErrorComponent {

  error: string;

  constructor(private errorService: ErrorService) {
    if (errorService.error) {
      this.error = errorService.error.error;
    }
  }

}
