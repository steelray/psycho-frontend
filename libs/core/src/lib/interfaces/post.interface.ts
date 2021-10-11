export interface IPost {
  slug: string;
  title: string;
  sub_title?: string;
  author?: IPostAuthor;
  tags?: IPostTag[];
  pictures?: IPostPictures;
  published_at?: number;
  description?: string;
  content?: string;
  category?: IPostCategory;
  views?: number;
  related_posts?: IPost[];
}

export interface IPostPictures {
  origin: string;
  webp?: string;
}

export interface IPostAuthor {
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IPostTag {
  title: string;
}

export interface IPostQueryParams {
  q?: string;
  page?: number;
  limit?: number;
  category_slug?: string;
  expand?: string;
  skipNew?: 1 | 0; // skips first 10 newest articles
}

export interface IPostCategory {
  title: string;
  id: string;
  slug: string;
}