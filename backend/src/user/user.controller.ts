import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Headers,
  UseInterceptors, HttpException, Request
} from '@nestjs/common';
import {UserService} from './user.service';
import {User as UserModel} from "../models/user";
import {AuthService} from "../auth/auth.service";

@Controller('user')
export class UserController {

  constructor(private userService: UserService, private authService: AuthService) {
  }

  @Get('/profile')
  async profile(@Headers('authorization') tok: string): Promise<UserModel> {
    return this.authService.getUserByToken(tok.split(' ')[1]);
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
