import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class TokenDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}
