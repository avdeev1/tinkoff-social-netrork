import {Injectable} from '@nestjs/common';
import {Post} from '../models/post';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from '../models/user';
import {TagService} from '../tag/tag.service';
import {PostDto} from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepo: Repository<Post>,
    private tagService: TagService) {
  }

  async getPosts(): Promise<Post[]> {
    const res = await this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.tags', 'tags')
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .leftJoinAndSelect('post.likes', 'likes')
      .getMany();

    return res.sort((a: Post, b: Post) => {
        return b.likes.length - a.likes.length;
    });
  }

  async create(postDto: PostDto, user: User): Promise<Post> {
    const tags = await this.tagService.getTagByIds(postDto.tags);
    const postModel = {
      text: postDto.text,
      title: postDto.title,
      image: postDto.image,
      tags,
      author: user,
    };
    const post = this.postRepo.create(postModel);

    await this.postRepo.save(post);

    return post;
  }

  async getPostsForSearch(query: string): Promise<Post[]> {
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.tags', 'tags')
      .where('post.text like :str OR post.title like :str', {str: `%${query}%`})
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .leftJoinAndSelect('post.likes', 'likes')
      .orderBy('post.createdAt', 'DESC')
      .getMany();
  }

  async getPostsForUser(id: number): Promise<Post[]> {
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.tags', 'tags')
      .where('post.authorId = :id', {id})
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .leftJoinAndSelect('post.likes', 'likes')
      .orderBy('post.createdAt', 'DESC')
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
      .leftJoinAndSelect('post.likes', 'likes')
      .getOne();
  }

  async getPostsForFavourite(userId: number): Promise<Post[]> {
    const posts = await this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.tags', 'tags')
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .leftJoinAndSelect('post.likes', 'likes')
      .orderBy('post.createdAt', 'DESC')
      .getMany();

    return posts.filter(post => {
      return post.likes.some(like => {
        return like.id === userId;
      })
    });
  }

  async findPostsByTag(id: string): Promise<Post[]> {
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.likes', 'likes')
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
      .leftJoinAndSelect('post.likes', 'likes')
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

  async like(postid: number, userId: number): Promise<{ [key: string]: boolean }> {
     await this.postRepo.createQueryBuilder('post')
      .relation(Post, 'likes')
      .of(postid)
      .add(userId);
     return {success: true};
  }

  async deleteLike(postid: number, userId: number): Promise<{ [key: string]: boolean }> {
    await this.postRepo.createQueryBuilder('post')
      .relation(Post, 'likes')
      .of(postid)
      .remove(userId);
    return {success: true};
  }

}
