import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { PostDto } from '../services/internal/model/PostDto';
import { PostsService } from '../services/PostsService';

declare var $: any;

@Component({
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  posts: PostDto[];
  postBody: string;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  constructor(private route: ActivatedRoute, private postsServices: PostsService) {
    route.params.subscribe(() => {
      this.posts = this.route.snapshot.data['info'];
    });
  }

  post(event: any) {
    event.preventDefault();

    if (this.postBody) {
      const post = new PostDto();
      post.body = this.postBody;
      this.postsServices.sendPost(post)
        .subscribe((res: PostDto) => {
          this.posts.splice(0, 0, res);
          this.onSuccessClearInputAndShowNewMessage();
          console.log('Posted messaged', res);
        });
    }
  }

  onSuccessClearInputAndShowNewMessage() {
    this.postBody = '';
    $('.scrollbar-inner').animate({ scrollTop: 0 }, 'slow');
  }

}

