import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post, Request,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { Comment as CommentModel } from "../models/comment";
import {CommentService} from "./comment.service";
import {AuthGuard} from "@nestjs/passport";

@Controller('comments')
export class CommentController {

  constructor(private commentService: CommentService) {}

  @Get('posts/:id')
  async comment(@Param('id') id): Promise<CommentModel[]> {
    return await this.commentService.getCommentsForPost(id);
  }

  @Get('/count')
  async count(): Promise<any> {
    return await this.commentService.count();
  }

  @Get('/count/:id')
  async countForUser(@Param('id') id: number): Promise<number> {
    return await this.commentService.countForUser(id);
  }

  @Get('/count/profile')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async countForProfile(@Request() req): Promise<number> {
    return await this.commentService.countForUser(req.user.id);
  }

  @Post('create')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async create(@Body() commentDto: CommentModel, @Request() req): Promise<CommentModel> {
    return await this.commentService.create(commentDto, req.user, req.post);
  }
}
