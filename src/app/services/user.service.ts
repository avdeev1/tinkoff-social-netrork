import { Injectable } from '@angular/core';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: IUser = {
    user: '@norimyxxxo',
    profilePhotoSrc: 'https://pbs.twimg.com/profile_images/1029031247073476610/trKYjiJ3_400x400.jpg',
    postIds: [1, 4],
    aboutMe: 'русскоязычный рэп-, грайм-, фристайл-исполнитель и исполнительный директор букинг-агентства «Booking Machine Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda delectus eius enim illo inventore maxime minus nemo nisi non nostrum perspiciatis, porro possimus qui sequi soluta sunt vero voluptatem.'
  };

  constructor() { }
}
