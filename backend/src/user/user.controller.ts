import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Request,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {UserService} from './user.service';
import {User as UserModel} from "../models/user";
import {AuthGuard} from '@nestjs/passport';
import {UserDto} from "./dto/user.dto";

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get('/profile')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async profile(@Request() req): Promise<UserModel> {
    return await this.userService.getUser(req.user.id);
  }

  @Get('/:id')
  async user(@Param('id') id): Promise<UserModel> {
    const user = await this.userService.getUser(id);
    if (!user) {
      throw new HttpException(`User with id ${id} not found`, 404);
    }
    return user;
  }

  @Get('/subscribers/list')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async getSubscribersList(@Request() req): Promise<UserModel> {
    return await this.userService.getSubscriptionList(req.user);
  }


  @Post('/update')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async editProfile(@Body() user: UserDto, @Request() req): Promise<{ [key: string]: boolean }> {
    return await this.userService.update(user, req.user);
  }
}
