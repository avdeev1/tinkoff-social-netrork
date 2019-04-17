import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  Request,
  Post,
  Body, Param, Headers,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Post as PostModel } from '../models/post';
import { PostService } from './post.service';
import {AuthService} from "../auth/auth.service";

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService, private authService: AuthService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async posts(): Promise<PostModel[]> {
    return this.postService.getPosts();
  }

  @Get('/profile')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async getPostsForProfile(@Request() req): Promise<PostModel[]> {
    return await this.postService.getPostsForUser(req.user.id);
  }

  @Get('/user/:id')
  async getPostsForUser(@Param('id') id): Promise<PostModel[]> {
    return await this.postService.getPostsForUser(id);
}

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async create(@Body() postDto: PostModel, @Request() req): Promise<PostModel> {
    return await this.postService.create(postDto, req.user);
  }
}
