import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterUseDto {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  confirmPassword: string;
}
