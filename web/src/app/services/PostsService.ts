import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PostDto } from './internal/model/PostDto';

@Injectable()
export class PostsService {

  api = '/api/';

  constructor(private http: HttpClient) {
  }

  public getAllPosts(): Observable<PostDto> {
    return this.http.get(this.api + 'posts')
      .map(this.extractData);
  }

  public sendPost(post: PostDto): Observable<PostDto> {
    return this.http.post(this.api + 'post', post)
      .map(this.extractData);
  }

  private extractData<T>(res: Response): any {
    return res;
  }

}
