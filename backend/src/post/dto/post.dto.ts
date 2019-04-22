import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class PostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsString()
  @IsOptional()
  image?: string;

  tags: number[];
}
