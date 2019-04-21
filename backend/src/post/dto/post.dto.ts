import {IsNotEmpty, IsString} from "class-validator";

export class PostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsString()
  image: string;

  tags: any[];
}
