import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../models';

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
}
