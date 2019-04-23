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
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.tags', 'tags')
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .leftJoinAndSelect('post.likes', 'likes')
      .getMany();
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

  async getPostsForUser(id: number): Promise<Post[]> {
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.tags', 'tags')
      .where('post.authorId = :id', {id})
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .leftJoinAndSelect('post.likes', 'likes')
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
    return this.postRepo
      .createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .addSelect(['author.login', 'author.avatar', 'author.id'])
      .leftJoinAndSelect('post.tags', 'tags')
      .loadRelationCountAndMap('post.comments', 'post.comments')
      .leftJoinAndSelect('post.likes', 'likes')
      .where('likes.id = :userId', {userId})
      .getMany();
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
