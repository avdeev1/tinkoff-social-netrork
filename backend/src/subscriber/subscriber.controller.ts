import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {SubscriberService} from "./subscriber.service";
import {Subscriber} from "../models/subscriber";
import {SubscriberDto} from "./subscriber.dto.ts/subscriber.dto";

@Controller('subscribers')
export class SubscriberController {

  constructor(private readonly subscriberService: SubscriberService) {
  }

  @Get('/find/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async findSubscription(@Param('id') subscriptionId: number, @Request() req): Promise<Subscriber> {
    return await this.subscriberService.findSubscription(subscriptionId, req.user);
  }

  @Post('/subscribe')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async subscribe(@Body() subscription: SubscriberDto, @Request() req): Promise<Subscriber> {
    return await this.subscriberService.subscribe(subscription.id, req.user);
  }

  @Post('/unsubscribe')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async unsubscribe(@Body() subscription: SubscriberDto, @Request() req): Promise<{ [key: string]: boolean }> {
    return await this.subscriberService.unsubscribe(subscription.id, req.user);
  }
}
