<script setup lang="ts">
import IconMenu from '@/assets/menu.svg'
import type { Slot } from 'vue'

defineSlots<{
  default?: Slot
}>()

const open = ref<boolean>(false)
const pages = [
  {
    link: '/studyResources/study',
    label: 'Обучение',
  },
  {
    link: '/studyResources/resources',
    label: 'Ресурсы',
  },
]
</script>

<template>
  <div class="relative cursor-pointer" @mouseenter="open = true" @mouseleave="open = false">
    <div class="flex gap-2 py-4 items-center sm:max-md:gap-0.5">
      <slot name="default" />
      <IconMenu
        class="w-[13px] h-2.5 sm:max-md:w-[10px] sm:max-md:h-1.5"
        :class="open ? 'text-green-logo' : 'text-white'"
      />
    </div>

    <Transition
      enter-from-class="opacity-0 -translate-y-5"
      leave-to-class="opacity-0 -translate-y-5"
      enter-active-class="transition duration-300 ease-out"
      leave-active-class="transition duration-200 ease-in"
    >
      <div
        v-if="open"
        class="absolute w-full py-4 flex flex-col gap-1 bg-black-gray-text rounded-md text-[14px] text-white shadow-sm shadow-black max-md:text-[10px]"
      >
        <RouterLink v-for="(page, index) of pages" :key="index" :to="page.link" active-class="text-green-logo">
          <div class="hover:bg-black-gray px-4 py-2 cursor-pointer transition">{{ page.label }}</div>
        </RouterLink>
      </div>
    </Transition>
  </div>
</template>
