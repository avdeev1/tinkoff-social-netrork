import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  likePost(postId: number): Observable<any>{
    return  this.http
      .post<any>( '/api/posts/like ', {id: postId});

  }

  deletePost(postId: number): Observable<any> {
     return this.http
      .post<any>( '/api/posts/delete ', {id: postId});
  }

}
