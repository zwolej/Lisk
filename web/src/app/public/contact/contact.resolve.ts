import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../../services/PostsService';

@Injectable()
export class ContactResolve implements Resolve<any> {

  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.postsService.getAllPosts();
  }

}
