import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import {Comment} from "./comment";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose({ name: 'name' })
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

  @Column({ nullable: true })
  avatar: string;
}
