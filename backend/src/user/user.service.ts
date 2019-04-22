import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User as UserModel} from '../models/user';
import {InjectRepository} from '@nestjs/typeorm';
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserModel) private readonly userRepo: Repository<UserModel>) {
  }

  getUser(id: number): Promise<UserModel> {
    return this.userRepo
      .createQueryBuilder('user')
      .select(['user.id', 'user.login','user.avatar', 'user.description', 'user.registrationDate'])
      .where({id})
      .loadRelationCountAndMap('user.comments', 'user.comments')
      .loadRelationCountAndMap('user.posts', 'user.posts')
      .getOne();
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

