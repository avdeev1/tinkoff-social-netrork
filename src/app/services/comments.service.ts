import {Injectable} from '@angular/core';
import {IComment} from '../models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getCommentsForPost(id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`api/comments/post/${id}`);
  }

  createComment(postId: number, comment: string): Observable<IComment> {
    return this.http.post<IComment>('api/comments/create', {comment, postId});
  }
}
