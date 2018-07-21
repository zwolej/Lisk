import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DelegateAdditionalDto } from './internal/model/DelegateAdditionalDto';
import { HttpService } from './HttpService';

@Injectable()
export class DelegatesService {

  constructor(private http: HttpService) {
  }

  public getAllDelegatesAdditionalData(): Observable<DelegateAdditionalDto> {
    return this.http.get('public/delegates').pipe(
      map(this.extractData));
  }

  private extractData<T>(res: Response): any {
    return res;
  }

}
