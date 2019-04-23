import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {ICreatePost, IPost, IUploadResponse} from '../models';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private userService: UserService, private http: HttpClient, private authService: AuthService) {
    this.http.get('/api/user/subscribers/list').subscribe(res => {
      console.log(res);
    })
  }

  getPostsForProfilePage(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`/api/posts/profile`);
  }

  getPostsForUserPage(id: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`api/posts/user/${id}`);
  }

  getPostsForMainPage(): Observable<IPost[]> {
    if (!this.authService.isAuth.value) {
      return this.getPopularPostForMainPage();
    }
    return this.http.get<IPost[]>('api/posts');
  }

  getPopularPostForMainPage(): Observable<IPost[]> {
    return this.http.get<IPost[]>('api/posts/popular');
  }

  getPostsForFavPage(): Observable<IPost[]> {
    return this.http.get<IPost[]>('api/posts/favourites');
  }

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`api/posts/${id}`);
  }

  getPostsByTag(id: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`/api/posts/tag/${id}`);
  }

  getPostsForSearch(str: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`api/posts/search`, {
      params: new HttpParams()
        .set('q', str)
    });
  }

  createPost(post: ICreatePost): Observable<IPost> {
    return this.http.post<IPost>('api/posts/create', post);
  }

  uploadImage(image: File): Observable<string> {
    const form = new FormData();
    form.append('file', image);

    return this.http
      .post<IUploadResponse>('api/upload/post_image', form)
      .pipe(
        map(res => res.url)
      );

  }
}
