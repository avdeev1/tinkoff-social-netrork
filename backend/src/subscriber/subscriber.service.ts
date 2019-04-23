import {Repository} from "typeorm";
import {Subscriber} from "../models/subscriber";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../models/user";
import {UserService} from "../user/user.service";

export class SubscriberService {
  constructor(@InjectRepository(Subscriber) private readonly subRepo: Repository<Subscriber>, private userService: UserService) {}

  async fundSub(id: number, user: User): Promise<Subscriber> {
    console.log(id);
    console.log(user.id);
    return this.subRepo.findOne(
      {
        where: {
          subscription: await this.userService.getUser(id),
          follower: user
        }
      }
    )
  }

  async follow(id: number, user: User): Promise<Subscriber> {
    const subs = await this.userService.getUser(id);
    const sub = this.subRepo.create({subscription: subs, follower: user});

    await this.subRepo.save(sub);

    return sub;
  }

  async getIdOfSub(id: number, user: User): Promise<Subscriber> {
    const subUser = await this.userService.getUser(id);

    return this.subRepo.findOne(
      {
        subscription: subUser,
        follower: user
      }
    )
  }

  async unfollow(id: number, user: User): Promise<{ [key: string]: boolean }> {
    const idOfSub = await this.getIdOfSub(id, user);

    await this.subRepo.delete(idOfSub.id);

    return {success: true}
  }
}
