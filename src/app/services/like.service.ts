import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  likePost(postId: number): Observable<{ [key: string]: boolean }> {
    return  this.http
      .post<{ [key: string]: boolean }>( '/api/posts/like ', {id: postId});

  }

  deleteLikePost(postId: number): Observable<{ [key: string]: boolean }> {
     return this.http
      .post<{ [key: string]: boolean }>( '/api/posts/like/delete ', {id: postId});
  }

}
