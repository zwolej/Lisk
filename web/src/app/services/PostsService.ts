import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostDto } from './internal/model/PostDto';
import { HttpService } from './HttpService';

@Injectable()
export class PostsService {

  constructor(private http: HttpService) {
  }

  public getAllPosts(): Observable<PostDto> {
    return this.http.get('posts')
      .map(this.extractData);
  }

  public sendPost(post: PostDto): Observable<PostDto> {
    return this.http.post('post', post)
      .map(this.extractData);
  }

  private extractData<T>(res: Response): any {
    return res;
  }

}
