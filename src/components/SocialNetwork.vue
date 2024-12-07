<script setup lang="ts">
import IconTelegram from '../assets/telegram.svg'
import IconDzen from '../assets/dzen.svg'
import IconYouTube from '../assets/youtube.svg'
import IconVK from '../assets/vk.svg'

interface LinkItem {
  component: unknown
  color: string
  link: string
}

const icons: LinkItem[] = [
  {
    component: IconTelegram,
    color: 'hover:text-telegram',
    link: 'http://web.telegram.org/',
  },
  {
    component: IconDzen,
    color: 'hover:text-white',
    link: 'https://dzen.ru',
  },
  {
    component: IconYouTube,
    color: 'hover:text-youtube',
    link: 'https://youtube.com',
  },
  {
    component: IconVK,
    color: 'hover:text-vk',
    link: 'https://vk.com',
  },
]
</script>

<template>
  <div class="flex gap-[22px] items-center max-md:gap-[12px] text-gray-dark-3">
    <a v-for="(item, index) of icons" :key="index" :href="item.link" target="_blank">
      <Component
        :is="item.component"
        :class="item.color"
        class="max-md:w-[16px] w-5 cursor-pointer hover:scale-110 transition"
      />
    </a>
  </div>
</template>

<style scoped></style>
