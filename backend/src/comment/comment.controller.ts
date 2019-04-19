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
import { Post as PostModel } from "../models/post"
import {CommentService} from "./comment.service";
import {AuthGuard} from "@nestjs/passport";

@Controller('api/comments')
export class CommentController {

  constructor(private commentService: CommentService) {}

  @Get('post/:id')
  async comment(@Param('id') id): Promise<CommentModel[]> {
    return await this.commentService.getCommentsForPost(id);
  }

  @Post('/create')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async create(@Body() data: any, @Request() req): Promise<CommentModel> {
    const comment: CommentModel = data.comment;
    const post: PostModel = data.post;
    return await this.commentService.create(comment, req.user, post);
  }
}
