import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthUserDto {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  password: string;
}
