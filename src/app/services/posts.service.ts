import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IPost, IUploadResponse} from '../models';
import {UserService} from './user.service';


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

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`api/posts/${id}`);
  }

  getPostsForSearch(str: string) {
  }

  createPost(headline: string, text: string, img: File, tags: string[]) {

  }

  uploadImage(image: File): Observable<string> {
    const form = new FormData();
    form.append('file', image);

    return this.http
      .post<IUploadResponse>('/upload/post_image', form)
      .pipe(
        map(res => res.url)
      );

  }
}
