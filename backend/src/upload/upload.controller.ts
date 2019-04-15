import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from './dto/file.dto';
import { UploadService } from './upload.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('post_image')
  @UseGuards(AuthGuard())
  @UseInterceptors(FileInterceptor('file'))
  async uploadPostImage(@UploadedFile() file: File) {
    const url = await this.uploadService.saveFile('post', file);

    return {
      success: true,
      url,
    };
  }

  @Post('avatar_image')
  @UseGuards(AuthGuard())
  @UseInterceptors(FileInterceptor('file'))
  async uploadAvatar(@UploadedFile() file: File) {
    const url = await this.uploadService.saveFile('avatar', file);

    return {
      success: true,
      url,
    };
  }
}
