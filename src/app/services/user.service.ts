import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser, IUploadResponse} from '../models';
import {map} from 'rxjs/operators';

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
  uploadImage(image: File): Observable<string> {
    const form = new FormData();
    form.append('file', image);

    return this.http
      .post<IUploadResponse>('api/upload/avatar_image', form)
      .pipe(
        map(res => res.url)
      );

  }
  editProfile(url: string, desc: string): Observable<object> {
    if ( url === '') { url = null; }
    return this.http.post<object>('api/user/update', {
      description: desc,
      avatar: url,
    });
  }
}
