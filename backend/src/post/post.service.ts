import { Injectable } from '@nestjs/common';
import { Post } from '../models/post';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user';
import { ConfigService } from '../config/config.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepo: Repository<Post>,
    private configService: ConfigService,
  ) {}

  getPosts(): Promise<Post[]> {
    return this.postRepo.find({ relations: ['author'] });
  }

  async create(postDto: Post, user: User): Promise<Post> {
    const post = this.postRepo.create(postDto);

    post.author = user;
    await this.postRepo.save(post);

    return post;
  }

  getPostsForUser(id): Promise<Post[]> {
    return this.postRepo.find({relations: ['author'],
      where: {
        author: {
          id: id,
        }
      }
    });
  }

  async getPostsForProfile(user: User): Promise<Post[] | null> {
    console.log(user);
    return this.getPostsForUser(user.id);
  }
}
