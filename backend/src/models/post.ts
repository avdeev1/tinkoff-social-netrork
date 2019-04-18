import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from './user';
import { Comment } from "./comment";
import { IsNotEmpty } from 'class-validator';

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

  @Column({ default: false })
  draft: boolean;
}
