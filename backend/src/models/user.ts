import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Exclude } from 'class-transformer';
import {Comment} from "./comment";
import {Post} from "./post";
import {Subscriber} from "./subscriber";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: () => 'strftime(\'%s\', \'now\')' })
  registrationDate: number;

  @Column({ nullable: true })
  description: string;

  @OneToMany(type => Comment, comment => comment.author)
  comments: Comment[];

  @OneToMany(type => Post, post => post.author)
  posts: Post[];

  @Column({ nullable: true })
  avatar: string;

  @OneToMany(type => Subscriber, sub => sub.subscription)
  subscriptions: User[];

  @OneToMany(type => Subscriber, sub => sub.follower)
  followers: User[];
}
