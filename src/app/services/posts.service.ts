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

  createPost(headline: string, textPost: string, img: string, tags: string[]): Observable<IPost> {
    return this.http.post<IPost>('api/posts/create', {
      title: headline,
      text: textPost,
      image: img
    });
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
