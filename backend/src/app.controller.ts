import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user';
import { Repository } from 'typeorm';
import { Post as PostModel } from './models/post';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AuthService,
    @InjectRepository(PostModel)
    private readonly postRepo: Repository<PostModel>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async getHello(): Promise<PostModel[]> {
    return this.postRepo.find({ relations: ['author'] });
  }

  @Post()
  async create(@Body() postData: PostModel): Promise<PostModel> {
    const post = this.postRepo.create(postData);

    post.author = await this.userRepo.findOne(1);
    await this.postRepo.save(post);

    return post;
  }
}
