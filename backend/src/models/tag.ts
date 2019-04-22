import {Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm/decorator/columns/Column";
import {IsNotEmpty} from "class-validator";
import {Post} from "./post";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  tag: string;

  @ManyToMany(type => Post, posts => posts.tags)
  posts: Post[];
}
