import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import NewsPage from '@/pages/NewsPage.vue'
import ElcoreStorePage from '@/pages/ElcoreStorePage.vue'
import ElcoreCloudPage from '@/pages/ElcoreCloudPage.vue'
import ElcoreIDEPage from '@/pages/ElcoreIDEPage.vue'
import StudyPage from '@/pages/StudyPage.vue'
import HomePage from '@/pages/HomePage.vue'
import FavouritesPage from '@/pages/FavouritesPage.vue'
import ShoppingListPage from '@/pages/ShoppingListPage.vue'
import ForumPage from '@/pages/ForumPage.vue'
import SearchPage from '@/pages/SearchPage.vue'
import ContactsPage from '@/pages/ContactsPage.vue'
import StudyResourcesPage from '@/pages/StudyRecoursesPage.vue'
import ResourcesPage from '@/pages/ResourcesPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Главная',
    },
    children: [
      {
        path: 'elcorestore',
        component: ElcoreStorePage,
        meta: {
          title: 'ElcoreStore'
        }
      },
      {
        path: 'elcorecloud',
        component: ElcoreCloudPage,
        meta: {
          title: 'ElcoreCloud'
        }
      },
      {
        path: 'elcoreide',
        component: ElcoreIDEPage,
        meta: {
          title: 'ElcoreIDE'
        }
      },
      {
        path: 'studyResources',
        component: StudyResourcesPage,
        meta: {
          title: 'Обучение и ресурсы'
        },
        children: [
          {
            path: 'study',
            component: StudyPage,
            meta: {
              title: 'Обучение'
            },
          },
          {
            path: 'resources',
            component: ResourcesPage,
            meta: {
              title: 'Ресурсы'
            }
          }
        ]
      },
      {
        path: 'news',
        component: NewsPage,
        meta: {
          title: 'Новости и статьи'
        }
      },
    ]
  },
  {
    path: '/favourites',
    component: FavouritesPage,
    meta: {
      title: 'Избранное',
    },
  },
  {
    path: '/shoppingList',
    component: ShoppingListPage,
    meta: {
      title: 'Корзина',
    },
  },
  {
    path: '/forum',
    component: ForumPage,
    meta: {
      title: 'Форум',
    },
  },
  {
    path: '/search',
    component: SearchPage,
    meta: {
      title: 'Поиск',
    },
  },
  {
    path: '/contacts',
    component: ContactsPage,
    meta: {
      title: 'Контакты',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
