import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors, HttpException, Request, UseGuards
} from '@nestjs/common';
import {UserService} from './user.service';
import {User as UserModel} from "../models/user";
import {AuthGuard} from '@nestjs/passport';
import {log} from "util";

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get('/profile')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async profile(@Request() req): Promise<UserModel> {
    return req.user;
  }

  @Get('/:id')
  async user(@Param('id') id): Promise<UserModel | Object> {
    const user = this.userService.getUser(id);
    if (user) {
      return user;
    }
    return new HttpException(`User with id ${id} not found`, 404);
  }
}
