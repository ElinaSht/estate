import type { TeamMember } from '@/types/team-member.ts'

export const teamInvestDepartment: TeamMember[] = [
  {
    image: new URL('../assets/photo/anna-vasilieva.webp', import.meta.url).href,
    name: 'Анна Васильева',
    post: 'Операционный директор',
    social: ['instagram', 'linkedin'],
  },
  {
    image: new URL('../assets/photo/elena-morozova.webp', import.meta.url).href,
    name: 'Елена Морозова',
    post: 'Инвестиционный консультант',
    social: ['instagram', 'linkedin'],
  },
  {
    image: new URL('../assets/photo/maria-kuznecova.webp', import.meta.url).href,
    name: 'Мария Кузнецова',
    post: 'Инвестиционный консультант',
    social: ['instagram', 'linkedin'],
  },
  {
    image: new URL('../assets/photo/alexey-smirnov.webp', import.meta.url).href,
    name: 'Алексей Смирнов',
    post: 'Инвестиционный консультант',
    social: ['linkedin'],
  },
]

export const teamMarketingDepartment: TeamMember[] = [
  {
    image: new URL('../assets/photo/dmitrii-ivanov.webp', import.meta.url).href,
    name: 'Дмитрий Иванов',
    post: 'Руководитель отдела маркетинга',
    social: ['instagram', 'linkedin'],
  },
  {
    image: new URL('../assets/photo/olga-sokolova.webp', import.meta.url).href,
    name: 'Ольга Соколова',
    post: 'Главный редактор',
    social: ['instagram', 'linkedin'],
  },
  {
    image: new URL('../assets/photo/sergey-petrov.webp', import.meta.url).href,
    name: 'Сергей Петров',
    post: 'Арт-директор',
    social: ['instagram', 'linkedin'],
  },
  {
    image: new URL('../assets/photo/natalia-fedorova.webp', import.meta.url).href,
    name: 'Наталья Федорова',
    post: 'Маркетолог',
    social: ['linkedin'],
  },
]
