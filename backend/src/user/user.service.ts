import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User as UserModel} from '../models/user';
import {InjectRepository} from '@nestjs/typeorm';
import {UserDto} from "./dto/user.dto";
import {Subscriber} from "../models/subscriber";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserModel) private readonly userRepo: Repository<UserModel>, @InjectRepository(Subscriber) private readonly subscriberRepo: Repository<Subscriber>) {
  }

  getUser(id: number): Promise<UserModel> {
    return this.userRepo
      .createQueryBuilder('user')
      .select(['user.id', 'user.login', 'user.avatar', 'user.description', 'user.registrationDate'])
      .where({id})
      .loadRelationCountAndMap('user.comments', 'user.comments')
      .loadRelationCountAndMap('user.posts', 'user.posts')
      .loadRelationCountAndMap('user.followers', 'user.followers')
      .loadRelationCountAndMap('user.subscriptions', 'user.subscriptions')
      .getOne();
  }


  async getSubscriptionList(u: UserModel): Promise<any> {
    const user = await this.userRepo.createQueryBuilder('user')
      .leftJoinAndSelect("user.followers", "followers")
      .leftJoinAndSelect("user.subscriptions", "subscriptions")
      .where('user.id = :id', {id: u.id})
      .getOne();

    user.followers = <any>await Promise.all(user.followers
      .map(u => this.subscriberRepo.findOne(u.id, {relations: ['subscription']})));
    user.subscriptions = <any>await Promise.all(user.subscriptions
      .map(u => this.subscriberRepo.findOne(u.id, {
        relations: ['follower', 'follower.subscriptions', 'follower.subscriptions.follower']
      })));
    return user;
  }

  async update(userDto: UserDto, user: UserModel): Promise<{ [key: string]: boolean }> {
    await this.userRepo
      .createQueryBuilder()
      .update(UserModel)
      .set({
        avatar: userDto.avatar,
        description: userDto.description
      })
      .where('id = :id', {id: user.id})
      .execute();

    return {success: true};
  }
}

