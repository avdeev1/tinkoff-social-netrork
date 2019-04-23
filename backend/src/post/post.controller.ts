import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Request,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {Post as PostModel} from '../models/post';
import {PostService} from './post.service';
import {PostDto} from "./dto/post.dto";
import {LikeDto} from "../comment/dto/like.dto";

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  @UseInterceptors(ClassSerializerInterceptor)
  async posts(@Request() req): Promise<PostModel[]> {
    return await this.postService.getSubscriberPosts(req.user);
  }

  @Get('/popular')
  @UseInterceptors(ClassSerializerInterceptor)
  async popular(): Promise<PostModel[]> {
    return await this.postService.getPosts();
  }


  @Get('/profile')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async getPostsForProfile(@Request() req): Promise<PostModel[]> {
    return await this.postService.getPostsForUser(req.user.id);
  }

  @Get('/favourites')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async getPostsForFavourites(@Request() req): Promise<PostModel[]> {
    return await this.postService.getPostsForFavourite(req.user.id);
  }

  @Get('/:id')
  async getPostsById(@Param('id') id: number): Promise<PostModel> {
    const res = await this.postService.getPostById(id);
    if (!res) {
      throw new HttpException(`Post with id ${id} not found`, 404);
    }
    return res;
  }

  @Get('/user/:id')
  async getPostsForUser(@Param('id') id): Promise<PostModel[]> {
    return await this.postService.getPostsForUser(id);
  }

  @Get('/tag/:id')
  async getPostsWithTag(@Param('id') id): Promise<PostModel[]> {
    return await this.postService.findPostsByTag(id);
  }

  @Post('/create')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async create(@Body() postDto: PostDto, @Request() req): Promise<PostModel> {
    return await this.postService.create(postDto, req.user);
  }

  @Post('/like')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async like(@Body() likeDto: LikeDto, @Request() req): Promise<{ [key: string]: boolean }> {
     return  await this.postService.like(likeDto.id, req.user.id);
  }

  @Post('/like/delete')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async delete(@Body() likeDto: LikeDto, @Request() req): Promise<{ [key: string]: boolean }> {
     return await this.postService.deleteLike(likeDto.id, req.user.id);
  }
}
