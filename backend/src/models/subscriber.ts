import {Entity, PrimaryGeneratedColumn} from "typeorm";
import {ManyToOne} from "typeorm";
import {User} from "./user";

@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.id)
  subscription: User;

  @ManyToOne(type => User, user => user.id)
  follower: User;
}
