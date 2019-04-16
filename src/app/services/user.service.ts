import {Injectable} from '@angular/core';
import {IUser} from '../models';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[];
  id: string;

  constructor() {
    this.createUsers();
  }

  private createUsers() {
    this.users = [
      {
        id: 1,
        login: '@norimyxxxo',
        avatar: 'https://pbs.twimg.com/profile_images/1029031247073476610/trKYjiJ3_400x400.jpg',
      },
      {
        id: 2,
        login: '@wherearetheavocados',
        avatar: 'https://scontent-arn2-1.cdninstagram.com/vp/e66f19d62b5a2a531ee80c7dcdc01700/5D425FC4/t51.2885-19/s320x320/50241673_369100297223490_7661710700984664064_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
      },
      {
        id: 3,
        login: '@papinomoloko',
        avatar: 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg',
      }
    ];
  }

  getUsers(): IUser[] {
    return this.users;
  }

  getUserForProfilePage(id: number): Observable<IUser> {
    return of(this.getUsers()[0]);
  }
}
