import { IPost, IPostAuthor, IPostCategory, IPostPictures, IPostTag } from '@psycho/core';
import * as moment from 'moment';

export class Post implements IPost {
  title: string;
  slug: string;
  sub_title?: string;
  author?: IPostAuthor;
  tags?: IPostTag[];
  pictures?: IPostPictures;
  published_at?: number;
  description?: string;
  content?: string;
  category?: IPostCategory;
  views?: number;
  related_posts?: Post[];

  constructor(post: IPost) {
    this.title = post.title;
    this.slug = `/blog/${post.slug}`;
    this.sub_title = post?.sub_title;
    this.author = post?.author;
    this.tags = post?.tags;
    this.pictures = post?.pictures;
    this.published_at = post?.published_at ? post.published_at : new Date().getTime();
    this.description = post?.description;
    this.content = post?.content;
    this.category = post?.category;
    this.views = post?.views ?? 0;
    if (post.related_posts) {
      this.related_posts = post.related_posts.map(post => new Post(post));
    }
  }

  get publishedAt(): string {
    return moment(this.published_at).format('DD.MM.YYYY')
  }
}