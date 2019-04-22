import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  likePost(postId: number){
     this.http
      .post( '/api/posts/like ', {id: postId}).subscribe(res => {
       console.log(res);
     });

  }

  // deletePost(postId: number) {
  //   this.http
  //     .post( '/api/posts/delete ', {id: postId}).subscribe(() => console.log('delte'));
  // }
  // generete() {
  //
  //   this.http.post(`api/posts/`, {title: 'aaa', text: 'bbbbbb'}).subscribe(() => {console.log('done'); });
  // }
  // like(postId: number): Observable<boolean>{
  //
  //   this.http
  //     .post( '/api/posts/islike ', {id: postId}).subscribe(() => {    console.log('islike');});
  // }
}
