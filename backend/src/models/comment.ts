import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from './user';
import { IsNotEmpty } from 'class-validator';
import { Post } from './post';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  text: string;

  @Column({ default: () => 'strftime(\'%s\', \'now\')' })
  createdAt: number;

  @ManyToOne(type => User, user => user.id)
  author: User;

  @ManyToOne(type => Post, post => post.id)
  post: Post;
}
