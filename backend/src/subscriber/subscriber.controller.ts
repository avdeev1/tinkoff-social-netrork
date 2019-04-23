import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
  Request,
  Post, Body
} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {SubscriberService} from "./subscriber.service";
import {Subscriber} from "../models/subscriber";
import {SubscriberDto} from "./subscriber.dto.ts/subscriber.dto";

@Controller('subs')
export class SubscriberController {

  constructor(private readonly subService: SubscriberService) {}

  @Get('/find/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async findSubs(@Param('id') id: number, @Request() req): Promise<Subscriber> {
    return await this.subService.fundSub(id, req.user);
  }

  @Post('/follow')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async follow(@Body() subs: SubscriberDto, @Request() req): Promise<Subscriber> {
    return await this.subService.follow(subs.id, req.user);
  }

  @Post('/unfollow')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async unfollow(@Body() subs: SubscriberDto, @Request() req): Promise<{ [key: string]: boolean }> {
    return await this.subService.unfollow(subs.id, req.user);
  }
}
