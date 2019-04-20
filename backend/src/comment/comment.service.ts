import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Comment} from "../models/comment";
import {Injectable} from "@nestjs/common";
import {User} from "../models/user";
import {PostService} from "../post/post.service";

@Injectable()
export class CommentService {

  constructor(
    @InjectRepository(Comment) private readonly commentRepo: Repository<Comment>,
    private postService: PostService) {
  }

  async getCommentsForPost(id): Promise<Comment[]> {
    return this.commentRepo
      .createQueryBuilder('comment')
      .innerJoin("comment.author", "author")
      .addSelect(["author.login", "author.avatar", "author.id"])
      .where('postId = :id', {id})
      .getMany();
  }

  async create(commentDto: Comment, user: User, postId: number): Promise<Comment> {

    const comment = this.commentRepo.create(commentDto);
    comment.author = user;
    comment.post = await this.postService.getPostById(postId);

    await this.commentRepo.save(comment);
    return comment;
  }
}
