import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ISubscriber, IUser} from '../models';

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
    return this.http.post<ISubscriber>('api/subscribers/subscribe', { id });
  }

  unsubscribe(id: number): Observable<{ [key: string]: boolean }> {
    return this.http.post<{ [key: string]: boolean }>('api/subscribers/unsubscribe', { id });
  }

}
