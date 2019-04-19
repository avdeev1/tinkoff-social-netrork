import {Injectable} from '@angular/core';
import {IComment, IPost} from '../models';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getCommentsForPost(id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`api/comments/post/${id}`);
  }


  leaveComment(post: IPost, comment: Object): Observable<IComment> {
    return this.http.post<IComment>('api/comments/create', {post, comment});
  }
}
