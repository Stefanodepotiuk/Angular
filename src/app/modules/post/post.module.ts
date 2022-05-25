import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostResolveService, PostService} from "./services";
import {HttpClientModule} from "@angular/common/http";
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';


@NgModule({
  declarations: [
    PostDetailsComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    PostResolveService
  ]
})
export class PostModule { }
