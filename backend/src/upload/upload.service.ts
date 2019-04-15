import { HttpException, Injectable } from '@nestjs/common';
import { File } from './dto/file.dto';
import { promises } from 'fs';
import { ConfigService } from '../config/config.service';
import { join } from 'path';

@Injectable()
export class UploadService {
  constructor(private configService: ConfigService) {}

  async saveFile(dir: string, file: File) {
    this.validateFiletype(file.mimetype);

    const savePath = this.configService.getUploadPath(dir);
    const filename = this.getUniqFilename(file.originalname);

    await promises.writeFile(join(savePath, filename), file.buffer);
    return this.configService.getUploadUrl(dir, filename);
  }

  private getUniqFilename(filename: string) {
    const ext = filename.split('.').reverse()[0];
    const name = filename.split('.').slice(0, -1);
    const hash = Math.random()
      .toString(31)
      .slice(2);

    return `${name}_${hash}.${ext}`;
  }

  private validateFiletype(type) {
    const allowedTypes = ['image/png', 'image/jpeg'];

    if (!allowedTypes.includes(type)) {
      throw new HttpException('invalid file format', 400);
    }
  }
}
