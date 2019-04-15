import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Post as PostModel } from '../models/post';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async posts(): Promise<PostModel[]> {
    return this.postService.getPosts();
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async create(@Body() postDto: PostModel, @Request() req): Promise<PostModel> {
    return await this.postService.create(postDto, req.user);
  }
}
