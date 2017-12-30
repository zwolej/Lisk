import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {DelegateDto} from "./internal/model/DelegateAdditionalDto";

@Injectable()
export class DelegatesService {

  api: string = "/api/";

  constructor(private http: HttpClient) { }

  public getAllDelegatesAdditionalData(): Observable<DelegateDto> {
    return this.http.get(this.api + "delegates")
      .map(this.extractData)
  }

  private extractData<T>(res: Response): any {
    return res;
  }

}
