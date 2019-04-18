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

  @Get('post/:id')
  async comment(@Param('id') id): Promise<CommentModel[]> {
    return await this.commentService.getCommentsForPost(id);
  }

  @Get('/count/profile')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async countForProfile(@Request() req): Promise<number> {
    return await this.commentService.countForUser(req.user.id);
  }

  @Get('/count/:id')
  async countForUser(@Param('id') id: number): Promise<number> {
    return await this.commentService.countForUser(id);
  }

  @Post('/create')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async create(@Body() data: any, @Request() req): Promise<CommentModel> {
    const comment: CommentModel = data.com;
    const postId: number = data.id;
    return await this.commentService.create(comment, req.user, postId);
  }
}
