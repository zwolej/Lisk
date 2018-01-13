import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ContactResolve } from './contact.resolve';
import { PostsService } from '../services/PostsService';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PostsService,
    ContactResolve
  ]
})
export class ContactModule {
}
