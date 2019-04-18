import {Repository} from "typeorm";
import {ConfigService} from "../config/config.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Comment} from "../models/comment";
import {Injectable} from "@nestjs/common";
import {User} from "../models/user";
import {Post} from "../models/post";

@Injectable()
export class CommentService {

  constructor(
    @InjectRepository(Comment) private readonly commentRepo: Repository<Comment>,
    private configService: ConfigService) {
  }

  async getCommentsForPost(id): Promise<Comment[]> {
    return this.commentRepo.find({
      relations: ['author', 'post'],
      where: {
        post: {
          id
        }
      }
    });
  }

  async create(commentDto: Comment, user: User, post: Post): Promise<Comment> {

    const comment = this.commentRepo.create(commentDto);
    comment.author = user;
    comment.post = post;

    await this.commentRepo.save(comment);
    return comment;
  }

  async count(): Promise<any> {
    return this.commentRepo.createQueryBuilder()
      .select('COUNT(comment.text) count, comment.postId id').addGroupBy('comment.postId').getRawMany();
  }

  async countForUser(id: number): Promise<number> {
    return this.commentRepo.count({
      relations: ['author'],
      where: {
        author: {
          id
        }
      }
    });
  }
}
