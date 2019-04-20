export interface IPost {
  id: number;
  title: string;
  text: string;
  createdAt: number;
  author: IUser;
  image?: string;
  comments: IComment[];
  draft: boolean;
}

export interface IUser {
  id: number;
  login: string;
  avatar?: string;
  description?: string;
  posts: IPost[];
  comments: IComment[];
  registrationDate: number;
}

export interface IComment {
  id: number;
  text: string;
  createdAt: number;
  author: IUser;
  post: IPost;
}

