export interface IPost {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  tags: string[];
  author?: IUser;
  profilePhotoSrc?: string;
  image?: string;
  likes: number;
  comments: number;
  draft?: boolean;
}

export interface IUser {
  id: number;
  name: string;
  avatar?: string;
}
