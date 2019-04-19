import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthUserDto } from './dto/authUser.dto';
import { AuthService } from './auth.service';
import { TokenDto } from './dto/token.dto';
import { RegisterUseDto } from './dto/registerUse.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async auth(@Body() userDto: AuthUserDto): Promise<any> {
    const user = await this.authService.authUser(
      userDto.login,
      userDto.password,
    );

    if (!user) {
      throw new HttpException('Not authorized', 401);
    }

    const token = await this.authService.createToken(user);

    return {
      token,
    };
  }

  @Post('/register')
  async register(@Body() userDto: RegisterUseDto) {
    const token = await this.authService.register(userDto);

    return {
      token,
    };
  }

  @Post('/validate')
  async validate(@Body() tokenDto: TokenDto) {
    const user = await this.authService.getUserByToken(tokenDto.token);

    if (!user) {
      throw new HttpException('Invalid token', 400);
    }

    return user;
  }
}
