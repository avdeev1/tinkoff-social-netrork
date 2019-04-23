import {Body, ClassSerializerInterceptor, Controller, Get, Param, Post, Request, UseGuards, UseInterceptors} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {Comment as CommentModel} from '../models/comment';
import {CommentService} from './comment.service';
import {CommentDto} from './dto/comment.dto';

@Controller('comments')
export class CommentController {

  constructor(private commentService: CommentService) {
  }

  @Get('post/:id')
  async comment(@Param('id') id): Promise<CommentModel[]> {
    return await this.commentService.getCommentsForPost(id);
  }

  @Post('/create')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async create(@Body() comment: CommentDto, @Request() req): Promise<CommentModel> {
    return await this.commentService.create(comment, req.user);
  }
}
