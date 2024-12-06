import { PostType } from '@/types/post-type.ts'
import type { Post } from '@/types/post.ts'

const templates: Omit<Post, 'id'>[] = [
  {
    date: '12 июля 2024',
    type: PostType.NEWS,
    header: 'Новые технологии в сфере автоматизации',
    description: 'Какие инновации помогут улучшить производственные процессы и повысить эффективность работы предприятий',
  },
  {
    type: PostType.ARTICLE,
    header: 'Влияние цифровизации',
    description: 'Вызовы и возможности появляются для компаний в результате цифровой трансформации производства',
  },
  {
    date: '24 апреля 2024',
    type: PostType.NEWS,
    header: 'Устойчивое развитие и ответственность',
    description: 'Какие методы и технологии помогают снизить негативное влияние производства',
  },
]

export const postsMock = Array.from(
  {length: 96},
  () => Math.floor(Math.random() * templates.length))
  .map(index => templates[index])
  .map((template, index) => ({ id: index, ...template }))
