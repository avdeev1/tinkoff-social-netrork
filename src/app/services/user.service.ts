import { Injectable } from '@angular/core';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: IUser = {
    user: '@norimyxxxo',
    profilePhotoSrc: 'https://pbs.twimg.com/profile_images/1029031247073476610/trKYjiJ3_400x400.jpg',
    postIds: [1, 4]
  };

  constructor() { }
}
