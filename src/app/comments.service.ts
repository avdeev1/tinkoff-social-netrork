import {Injectable} from '@angular/core';
import {IUser} from './models';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  users: IUser[];

  constructor(private userService: UserService) {
    this.users = this.userService.users;
  }

  getCommentsForPost() {
    return [{
      user: this.users[1],
      date: '24 апреля 2018 в 14:58',
      text: 'Это невероятно!'
    }, {
      user: this.users[0],
      date: '26 мая 2018 в 15:08',
      text: 'Очень круто!'
    }];
  }
}
