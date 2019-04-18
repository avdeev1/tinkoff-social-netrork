import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../models/user';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private configService: ConfigService) {}

  getUser(id: number): Promise<User> {
    return this.userRepo
      .createQueryBuilder('user')
      .select(['user.id', 'user.login','user.avatar', 'user.description', 'user.registrationDate'])
      .where({id})
      .loadRelationCountAndMap('user.comments', 'user.comments')
      .getOne();
  }
}

