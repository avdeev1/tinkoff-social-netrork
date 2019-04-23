import {Injectable} from '@nestjs/common';
import {Post} from '../models/post';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from '../models/user';
import {TagService} from "../tag/tag.service";
import {PostDto} from "./dto/post.dto";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepo: Repository<Post>,
    private tagService: TagService) {
  }

  async getPosts(): Promise<Post[]> {
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin("post.author", "author")
      .addSelect(["author.login", "author.avatar", "author.id"])
      .leftJoinAndSelect('post.tags', 'tags')
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .getMany();
  }

  async create(postDto: PostDto, user: User): Promise<Post> {
    const tags = await this.tagService.getTagByIds(postDto.tags);
    const postModel = {
      text: postDto.text,
      title: postDto.title,
      image: postDto.image,
      tags: tags,
      author: user,
    };
    const post = this.postRepo.create(postModel);

    await this.postRepo.save(post);

    return post;
  }

  async getPostsForUser(id: number): Promise<Post[]> {
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.tags', 'tags')
      .where('post.authorId = :id', {id})
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .getMany();
  }

  async getPostById(id: number): Promise<Post> {
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.tags', 'tags')
      .where('post.id = :id', {id})
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .getOne();
  }

  async getPostsForFavourite(): Promise<Post[]> {
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin("post.author", "author")
      .addSelect(["author.login", "author.avatar", "author.id"])
      .leftJoinAndSelect('post.tags', 'tags')
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .orderBy('post.createdAt', 'DESC')
      .getMany();
  }

  async findPostsByTag(id: string): Promise<Post[]> {
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin("post.author", "author")
      .addSelect(["author.login", "author.avatar", "author.id"])
      .leftJoinAndSelect('post.tags', 'tags')
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .where(qb => {
        const subQuery = qb.subQuery()
          .select('post.id')
          .from(Post, 'post')
          .leftJoin('post.tags', 'tags')
          .where('tags.id = :id', {id})
          .getQuery();
        return `post.id IN ${subQuery}`;
      })
      .getMany();
  }

  async getSubscriberPosts(user: User): Promise<Post[]> {
    return this.postRepo.createQueryBuilder('post')
      .innerJoin("post.author", "author")
      .addSelect(["author.login", "author.avatar", "author.id"])
      .leftJoinAndSelect('post.tags', 'tags')
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .where(qb => {
        const subQuery = qb.subQuery()
          .select('user.id')
          .from(User, 'user')
          .innerJoin('user.subscriptions', 'sub')
          .where('sub.followerId = :id', {id: user.id})
          .getQuery();
        return `post.author.id IN ${subQuery}`;
      })
      .orWhere('post.author.id = :id', {id: user.id})
      .orderBy('post.createdAt', 'DESC')
      .getMany();
  }
}
