import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ISubscriber, IUploadResponse, IUser} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`api/user/${id}`);
  }

  getProfile(): Observable<IUser> {
    return this.http.get<IUser>(`api/user/profile`);
  }

  getInfoAboutSubscribes(id: string): Observable<ISubscriber> {
    return this.http.get<ISubscriber>(`api/subscribers/find/${id}`);
  }

  subscribe(id: number): Observable<ISubscriber> {
    return this.http.post<ISubscriber>('api/subscribers/subscribe', {id});
  }

  unsubscribe(id: number): Observable<{ [key: string]: boolean }> {
    return this.http.post<{ [key: string]: boolean }>('api/subscribers/unsubscribe', {id});
  }

  uploadImage(image: File): Observable<string> {
    const form = new FormData();
    form.append('file', image);

    return this.http
      .post<IUploadResponse>('api/upload/avatar_image', form)
      .pipe(
        map(res => res.url)
      );
  }

  editProfile(url: string = null, desc: string = null): Observable<object> {
    return this.http.post<object>('api/user/update', {
      description: desc,
      avatar: url,
    });
  }

  getInfoAboutSubscribes(id: string): Observable<ISubscriber> {
    return this.http.get<ISubscriber>(`api/subscribers/find/${id}`);
  }

  subscribe(id: number): Observable<ISubscriber> {
    return this.http.post<ISubscriber>('api/subscribers/subscribe', {id});
  }

  unsubscribe(id: number): Observable<{ [key: string]: boolean }> {
    return this.http.post<{ [key: string]: boolean }>('api/subscribers/unsubscribe', {id});
  }

}
