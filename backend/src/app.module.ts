import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user';
import { Post } from './models/post';
import { AuthController } from './auth/auth.controller';
import { Auth } from './models/auth';
import { HttpStrategy } from './auth/http.strategy';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PassportModule } from '@nestjs/passport';
import { join } from 'path';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { ConfigModule } from './config/config.module';

const options: ConnectionOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [join(__dirname, '/models/*.ts')],
  logging: true,
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    TypeOrmModule.forFeature([User, Post, Auth]),
    PassportModule.register({ defaultStrategy: 'bearer', property: 'user' }),
    ConfigModule,
  ],
  controllers: [AuthController, PostController, UploadController],
  providers: [AuthService, HttpStrategy, PostService, UploadService],
})
export class AppModule {}
