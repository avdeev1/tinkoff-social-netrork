import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn,} from 'typeorm';
import {User} from './user';
import {Comment} from "./comment";
import {IsNotEmpty} from 'class-validator';
import {Tag} from "./tag";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  text: string;

  @Column({ default: () => 'strftime(\'%s\', \'now\')' })
  createdAt: number;

  @ManyToOne(type => User, user => user.id)
  author: User;

  @Column({ nullable: true })
  image: string;

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[];

  @ManyToMany(type => Tag, tags => tags.posts)
  @JoinTable()
  tags: Tag[];

  @Column({ default: false })
  draft: boolean;


  @ManyToMany(type => User, user => user.postsLike)
  @JoinTable()
  likes: User[];
}
