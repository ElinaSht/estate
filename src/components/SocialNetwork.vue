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
    color: 'sm:hover:text-telegram max-sm:active:text-telegram sm:active:text-telegram/60',
    link: 'http://web.telegram.org/',
  },
  {
    component: IconDzen,
    color: 'sm:hover:text-white max-sm:active:text-white sm:active:text-white/60',
    link: 'https://dzen.ru',
  },
  {
    component: IconYouTube,
    color: 'sm:hover:text-youtube max-sm:active:text-youtube sm:active:text-youtube/60',
    link: 'https://youtube.com',
  },
  {
    component: IconVK,
    color: 'sm:hover:text-vk max-sm:active:text-vk sm:active:text-vk/60',
    link: 'https://vk.com',
  },
]
</script>

<template>
  <div class="flex gap-[22px] items-center max-md:gap-[12px] text-gray-dark-3">
    <a v-for="(item, index) of icons" :key="index" :href="item.link" target="_blank" class="icon">
      <Component
        :is="item.component"
        :class="item.color"
        class="icon max-md:w-[16px] w-5"
        @touchstart.passive="() => {}"
      />
    </a>
  </div>
</template>

<style scoped></style>
