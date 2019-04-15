import { Injectable } from '@angular/core';
import { IUser } from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: IUser[] = [{
    user: '@norimyxxxo',
    profilePhotoSrc: 'https://pbs.twimg.com/profile_images/1029031247073476610/trKYjiJ3_400x400.jpg',
    postIds: [1, 4]
  },
  {
    user: '@masha',
    profilePhotoSrc: 'https://scontent-arn2-1.cdninstagram.com/vp/e66f19d62b5a2a531ee80c7dcdc01700/5D425FC4/t51.2885-19/s320x320/50241673_369100297223490_7661710700984664064_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
    postIds: [1, 5]
  },
  {
    user: '@natali',
    profilePhotoSrc: 'https://pbs.twimg.com/profile_images/1029031247073476610/trKYjiJ3_400x400.jpg',
    postIds: [2, 6]
  }];

  constructor() { }
}
