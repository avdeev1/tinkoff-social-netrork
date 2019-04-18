import {Injectable} from '@angular/core';
import {IUser} from '../models';
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[];
  id: string;

  constructor(private route: ActivatedRoute) {
  }

}
