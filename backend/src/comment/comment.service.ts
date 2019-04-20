import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Comment} from '../models/comment';
import {User} from '../models/user';
import {PostService} from '../post/post.service';
import {CommentDto} from './dto/comment.dto';

@Injectable()
export class CommentService {

  constructor(
    @InjectRepository(Comment) private readonly commentRepo: Repository<Comment>,
    private postService: PostService) {
  }

  async getCommentsForPost(id): Promise<Comment[]> {
    return this.commentRepo
      .createQueryBuilder('comment')
      .innerJoin('comment.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .where('postId = :id', { id })
      .getMany();
  }

  async create(commentDto: CommentDto, user: User): Promise<Comment> {

    const comment = this.commentRepo.create({
      text: commentDto.comment,
    });
    comment.author = user;
    comment.post = await this.postService.getPostById(commentDto.postId);

    await this.commentRepo.save(comment);
    return comment;
  }
}
