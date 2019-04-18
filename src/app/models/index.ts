export interface IPost {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  tags: string[];
  author: IUser;
  image?: string;
  comments: number;
  draft: boolean;
}

export interface IUser {
  id: number;
  name: string;
  avatar?: string;
  postIds: number[];
  description?: string;
}
