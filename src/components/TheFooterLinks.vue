<script setup lang="ts">
import { footerLinks } from '@/consts/footer-links.ts'
import IconDropdownArrow from '../assets/icons/dropdown-arrow.svg'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const opened = ref(Object.fromEntries(footerLinks.map(({ title }) => [title, false])))

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')
</script>

<template>
  <div class="flex gap-[87px] max-lg:gap-[40px] max-sm:flex-col max-sm:gap-[12px]">
    <div v-for="section of footerLinks" :key="section.title" class="flex flex-col gap-[8px]">
      <div class="flex items-center" @click="opened[section.title] = !opened[section.title]">
        <div
          class="text-spm-cornflower max-sm:text-spm-blue max-sm:text-[14px]"
          :class="opened[section.title] && 'max-sm:text-spm-cornflower'"
        >
          {{ section.title }}
        </div>
        <IconDropdownArrow
          class="items-center ml-auto hidden max-sm:flex transition"
          :class="opened[section.title] && 'rotate-180'"
        />
      </div>

      <Transition
        enter-from-class="!opacity-0 !h-0"
        leave-to-class="!opacity-0 !h-0"
        enter-active-class="!transition-[height] !duration-300 !ease-out"
        leave-active-class="!transition-[height] !duration-100 !ease-in"
      >
        <div v-if="!sm || opened[section.title]" class="flex flex-col gap-[8px]">
          <HyperLink v-for="link of section.links" :key="link" thin :text="link" class="max-sm:text-[14px]" />
        </div>
      </Transition>

      <div class="bg-spm-blue-mid h-[1px] mt-[8px] w-full transition hidden max-sm:block" />
    </div>
  </div>
</template>

<style scoped></style>
