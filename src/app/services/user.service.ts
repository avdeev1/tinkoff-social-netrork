import {Injectable} from '@angular/core';
import {IUser} from '../models';
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[];
  id: string;

  constructor(private route: ActivatedRoute) {
    this.createUsers();
  }

  private createUsers() {
    this.users = [
      {
        id: 1,
        login: '@norimyxxxo',
        avatar: 'https://pbs.twimg.com/profile_images/1029031247073476610/trKYjiJ3_400x400.jpg',
        postIds: [1, 4]
      },
      {
        id: 2,
        login: '@wherearetheavocados',
        avatar: 'https://scontent-arn2-1.cdninstagram.com/vp/e66f19d62b5a2a531ee80c7dcdc01700/5D425FC4/t51.2885-19/s320x320/50241673_369100297223490_7661710700984664064_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
        postIds: [1, 4]
      },
      {
        id: 3,
        login: '@papinomoloko',
        avatar: 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg',
        postIds: []
      }
    ];
  }

  getUsers(): IUser[] {
    return this.users;
  }

  getUserForProfilePage() {
    this.id = this.route.snapshot.paramMap.get('id');
    return this.users[this.id];
  }
}
