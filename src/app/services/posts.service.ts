import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private userService: UserService, private http: HttpClient) {
  }

  getPostsForProfilePage(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`/api/posts/profile`);
  }

  getPostsForUserPage(id: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`api/posts/user/${id}`);
  }

  getPostsForMainPage(): Observable<IPost[]> {
    return this.http.get<IPost[]>('api/posts');
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
    return this.http.get<IPost[]>(`api/posts/search/${str}`);
  }
}
