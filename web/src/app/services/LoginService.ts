import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostDto } from './internal/model/PostDto';
import { HttpService } from './HttpService';

@Injectable()
export class LoginService {

  constructor(private http: HttpService) { }

  public login(username: string, password: string): Observable<PostDto> {
    return this.http.post('login', {username: username, password: password});
  }

}
