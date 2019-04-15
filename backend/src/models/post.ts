import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from './user';
import { IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';

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

  @Column()
  createdAt: number = Date.now();

  @ManyToOne(type => User, user => user.id)
  author: User;

  @Column({ nullable: true })
  image: string;

  @Column()
  draft: boolean = true;
}
