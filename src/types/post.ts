import type { PostType } from '@/types/post-type.ts'

interface PostBase<T extends PostType> {
  id: number,
  type: T,
  header: string,
  description: string,
}

export interface PostNews extends PostBase<PostType.NEWS>{
  date: string,
}

export interface PostArticle extends PostBase<PostType.ARTICLE>{
}

export type Post = PostNews | PostArticle
