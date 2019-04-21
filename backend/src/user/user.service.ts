import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from '../models/user';
import {InjectRepository} from '@nestjs/typeorm';
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

  getUser(id: number): Promise<User> {
    return this.userRepo
      .createQueryBuilder('user')
      .select(['user.id', 'user.login','user.avatar', 'user.description', 'user.registrationDate'])
      .where({id})
      .loadRelationCountAndMap('user.comments', 'user.comments')
      .loadRelationCountAndMap('user.posts', 'user.posts')
      .getOne();
  }

  async edit(userDto: UserDto, us: User): Promise<User> {
    const user = await this.userRepo.findOne(us.id);
    user.avatar = userDto.avatar;
    user.description = userDto.description;
    await this.userRepo.save(user);

    return user;
  }
}

