import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import {Comment} from "./comment";
import {Post} from "./post";

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

  @ManyToMany(type => Post, post => post.id)
  likes: User[];
}
