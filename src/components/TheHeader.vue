<script setup lang="ts">
import HyperLink from '@/components/HyperLink.vue'
import TheSideMenu from '@/components/TheSideMenu.vue'
import IconMenu from '@/assets/icons/menu-button.svg'
import IconMenuClose from '@/assets/icons/menu-button-close.svg'
import { links } from '@/consts/links.ts'

const opened = defineModel<boolean>('opened', { required: true })
</script>

<template>
  <div
    class="isolate relative flex h-[100px] items-center justify-between gap-[10px] max-sm:h-[76px]"
    @toushstart.prevent.stop
    @scroll.prevent.stop
  >
    <HyperLink text="Estate" class="font-merriweather font-bold text-4xl max-sm:text-[22px]" />

    <div class="flex gap-[10px] flex-1 justify-evenly items-center max-md:hidden">
      <HyperLink v-for="link of links" v-bind="link" :key="link.text" />
    </div>

    <div class="flex items-center gap-[10px] max-md:ml-auto">
      <SocialButton fill :size="30" type="telegram" class="max-md:hidden" />
      <SocialButton fill :size="30" type="whatsapp" class="max-md:hidden" />
      <HyperLink text="+7 999 854 85 85" class="max-md:hidden" />
      <HyperLink text="En" class="underline max-md:no-underline" />
    </div>

    <Component
      :is="opened ? IconMenuClose : IconMenu"
      class="hidden max-md:flex ml-[14px] cursor-pointer"
      @click="opened = !opened"
    />

    <TheSideMenu
      :opened
      class="fixed left-0 top-[100px] max-sm:top-[76px] w-full h-[calc(100dvh-100px)] max-sm:h-[calc(100dvh-76px)] transition md:opacity-0 md:pointer-events-none"
    />
  </div>
</template>
