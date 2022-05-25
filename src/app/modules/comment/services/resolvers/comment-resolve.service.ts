import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IComment} from '../../interfaces';
import {CommentService} from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<IComment> {

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IComment | Observable<IComment> | Promise<IComment> {
    const {id} = route.params;
    this.commentService.getById(id);
    throw new Error('Method not implemented.');
  }
}
