import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private userService: UserService, private http: HttpClient, private authService: AuthService) {
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
}
