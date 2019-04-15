import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from '../models/auth';
import { Repository } from 'typeorm';
import { User } from '../models/user';
import { RegisterUseDto } from './dto/registerUse.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private readonly authRepo: Repository<Auth>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async getUserByToken(token: string): Promise<User | null> {
    const auth = await this.authRepo.findOne(
      { token },
      { relations: ['user'] },
    );

    if (auth) {
      return auth.user;
    }

    return null;
  }

  async authUser(login: string, password: string): Promise<User | undefined> {
    return await this.userRepo.findOne({ login, password });
  }

  async createToken(user: User): Promise<string> {
    const auth = this.authRepo.create();

    auth.user = user;

    await this.authRepo.save(auth);

    return auth.token;
  }

  async register(userDto: RegisterUseDto) {
    if (userDto.password !== userDto.confirmPassword) {
      throw new HttpException('Password does not match!', 400);
    }

    const user = this.userRepo.create({
      login: userDto.login,
      password: userDto.password,
    });

    await this.userRepo.save(user);

    return this.createToken(user);
  }
}
