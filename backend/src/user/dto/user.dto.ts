import {IsOptional, IsString} from "class-validator";

export class UserDto {
  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  avatar: string;
}
