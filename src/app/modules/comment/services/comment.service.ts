import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../interfaces/comment.interfaces";
import {urls} from "../../../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments);
  }

  getById(id: String): Observable<IComment> {
    return this.httpClient.get<IComment>(`${urls.comments}/${id}`);
  }
}
