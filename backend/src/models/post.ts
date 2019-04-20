import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn,} from 'typeorm';
import {User} from './user';
import {Comment} from "./comment";
import {IsNotEmpty} from 'class-validator';
import {Tags} from "./tags";

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

  @ManyToMany(type => Tags, tags => tags.posts)
  @JoinTable()
  tags: Tags[];

  @Column({ default: false })
  draft: boolean;
}
