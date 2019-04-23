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
  likes: IUser[];
}

export interface ICreatePost {
  title: string;
  text: string;
  image?: string;
  tags?: number[];
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

export interface IUploadResponse {
  success: boolean;
  url: string;
}

export interface IComment {
  id: number;
  text: string;
  createdAt: number;
  author: IUser;
  post: IPost;
}
export interface IUploadResponse {
  success: boolean;
  url: string;
}


export interface ITag {
  id: number;
  tag: string;
}

export interface ISubscriber {
  id: number;
  subscription: IUser[];
  follower: IUser[];
}

