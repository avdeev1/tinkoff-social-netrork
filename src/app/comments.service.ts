import { Injectable } from '@angular/core';
import {IComment} from './models';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private users = new UserService().users;
  public comments: IComment[] = [{
    user: this.users[0],
    date: '24 апреля 2018 в 14:58',
    text: 'Это невероятно!'
  },
  {
    user: this.users[1],
    date: '26 мая 2018 в 15:08',
    text: 'Очень круто!'
  }];

  public emptyComment: IComment = {
    user: this.users[0],
    date: null,
    text: null
  };


  constructor() { }
}
