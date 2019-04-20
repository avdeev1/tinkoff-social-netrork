import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets(configService.get('PUBLIC_PATH'), {
    prefix: configService.get('PUBLIC_URL'),
  });
  await app.listen(configService.get('PORT'));
}

bootstrap();
