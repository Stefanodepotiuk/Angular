import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../interfaces";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.comment = data);
    }


}
