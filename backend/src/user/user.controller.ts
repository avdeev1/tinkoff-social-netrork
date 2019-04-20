import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  Param,
  Request,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {UserService} from './user.service';
import {User as UserModel} from "../models/user";
import {AuthGuard} from '@nestjs/passport';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get('/profile')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async profile(@Request() req): Promise<UserModel> {
    return this.userService.getUser(req.user.id);
  }

  @Get('/:id')
  async user(@Param('id') id): Promise<UserModel> {
    const user = this.userService.getUser(id);
    if (!user) {
      throw new HttpException(`User with id ${id} not found`, 404);
    }
    return user;
  }
}
