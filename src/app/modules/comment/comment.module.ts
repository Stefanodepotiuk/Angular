import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentService} from "./services/comment.service";
import {HttpClientModule} from "@angular/common/http";
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentResolveService } from './services';


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService,
    CommentResolveService
  ]
})
export class CommentModule { }
