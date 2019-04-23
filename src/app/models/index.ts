export interface IPost {
  id: number;
  title: string;
  text: string;
  createdAt: number;
  author: IUser;
  image?: string;
  comments: IComment[];
  tags: ITag[];
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
  subscriptions: number;
  followers: number;
}

export interface IComment {
  id: number;
  text: string;
  createdAt: number;
  author: IUser;
  post: IPost;
}

export interface ITag {
  id: number;
  tag: string;
}

export interface ISubscriber {
  id: number;
  subscription: IUser;
  follower: IUser;
}

