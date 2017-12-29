import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DelegatesService {

  api: string = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  public getAllDelegatesAdditionalData(): Observable<any> {
    return this.http.get(this.api + "delegates");
  }

}
