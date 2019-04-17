export interface IPost {
  title: string;
  text: string;
  tags: string[];
  user: string;
  profilePhotoSrc?: string;
  likes: number;
  comments: number;
  date: string;
  imgPostSrc?: string;
  postId: number;
}

export interface IUser {
  user: string;
  profilePhotoSrc?: string;
  postIds: number[];
  aboutMe?: string;
}
