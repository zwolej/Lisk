import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from './internal/model/PostDto';
import { HttpService } from './HttpService';

@Injectable()
export class PostsService {

  constructor(private http: HttpService) {
  }

  public getAllPosts(): Observable<PostDto> {
    return this.http.get('public/posts').pipe(
      map(this.extractData));
  }

  public sendPost(post: PostDto): Observable<PostDto> {
    return this.http.post('public/post', post).pipe(
      map(this.extractData));
  }

  private extractData<T>(res: Response): any {
    return res;
  }

}
