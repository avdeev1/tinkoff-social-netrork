import {ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors} from "@nestjs/common";
import {TagService} from "./tag.service";
import {AuthGuard} from "@nestjs/passport";
import {Tag} from "../models/tag";

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard())
  async tags(): Promise<Tag[]> {
    return await this.tagService.getTags();
  }
}
