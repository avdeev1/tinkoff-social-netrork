import {Module} from '@nestjs/common';
import {AuthService} from './auth/auth.service';
import {ConnectionOptions} from 'typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './models/user';
import {Post} from './models/post';
import {Comment} from "./models/comment";
import {AuthController} from './auth/auth.controller';
import {Auth} from './models/auth';
import {HttpStrategy} from './auth/http.strategy';
import {PostController} from './post/post.controller';
import {PostService} from './post/post.service';
import {UserService} from "./user/user.service";
import {UserController} from "./user/user.controller";
import {PassportModule} from '@nestjs/passport';
import {join} from 'path';
import {UploadController} from './upload/upload.controller';
import {UploadService} from './upload/upload.service';
import {ConfigModule} from './config/config.module';
import {CommentController} from "./comment/comment.controller";
import {CommentService} from "./comment/comment.service";
import {TagService} from "./tag/tag.service";
import {TagController} from "./tag/tag.controller";
import {Tag} from "./models/tag";

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
    TypeOrmModule.forFeature([User, Post, Auth, Comment, Tag]),
    PassportModule.register({ defaultStrategy: 'bearer', property: 'user' }),
    ConfigModule,
  ],
  controllers: [AuthController, PostController, UploadController, UserController, CommentController, TagController],
  providers: [AuthService, HttpStrategy, PostService, UploadService, UserService, CommentService, TagService],
})
export class AppModule {}
