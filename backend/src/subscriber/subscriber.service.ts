import {Repository} from "typeorm";
import {Subscriber} from "../models/subscriber";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../models/user";
import {UserService} from "../user/user.service";

export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber) private readonly subscriberRepository: Repository<Subscriber>,
    private userService: UserService
  ) {
  }

  async findSubscription(subscriptionId: number, user: User): Promise<Subscriber> {
    return this.subscriberRepository.findOne(
      {
        where: {
          subscription: await this.userService.getUser(subscriptionId),
          follower: user
        }
      }
    )
  }

  async subscribe(subscriptionId: number, user: User): Promise<Subscriber> {
    const subscription = await this.userService.getUser(subscriptionId);
    const subscriber = this.subscriberRepository.create({subscription: subscription, follower: user});

    await this.subscriberRepository.save(subscriber);

    return subscriber;
  }

  async getIdOfSubscription(subscriptionId: number, user: User): Promise<Subscriber> {
    const subscriber = await this.userService.getUser(subscriptionId);

    return this.subscriberRepository.findOne(
      {
        subscription: subscriber,
        follower: user
      }
    )
  }

  async unsubscribe(id: number, user: User): Promise<{ [key: string]: boolean }> {
    const subscription = await this.getIdOfSubscription(id, user);

    await this.subscriberRepository.delete(subscription.id);

    return {success: true}
  }
}
