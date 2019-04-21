import {IsString} from "class-validator";

export class UserDto {
  @IsString()
  description: string;

  @IsString()
  avatar: string;
}
