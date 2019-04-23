import {Injectable} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISub, IUser} from "../models";

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

  getInfoAboutSubscribes(id: string): Observable<ISub> {
    return this.http.get<ISub>(`api/subs/find/${id}`)
  }

  follow(id: number): Observable<ISub> {
    return this.http.post<ISub>('api/subs/follow', {id});
  }

  unfollow(id: number): Observable<{ [key: string]: boolean }> {
    return this.http.post<{ [key: string]: boolean }>('api/subs/unfollow', {id});
  }

}
