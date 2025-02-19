<script setup lang="ts">
import { links } from '@/consts/links.ts'
import HyperLink from '@/components/HyperLink.vue'

const props = defineProps<{
  opened: boolean
}>()
</script>

<template>
  <Transition
    enter-from-class="!opacity-0"
    leave-to-class="!opacity-0"
    enter-active-class="!transition-[opacity] !duration-300 !ease-out"
    leave-active-class="!transition-[opacity] !duration-200 !ease-in"
  >
    <div v-if="props.opened" class="flex flex-col bg-white pl-[24px]">
      <div class="gap-[28px] pt-[10px]">
        <HyperLink v-for="link of links" v-bind="link" :key="link.text" static />
      </div>

      <div class="mt-auto mb-[40px]">
        <HyperLink thin class="text-[14px]" text="+7 999 854 85 85 — Москва" />
        <HyperLink thin class="text-[14px]" text="+7 914 487 38 38 — Владивосток" />
        <div class="flex gap-[18px] mt-[10px]">
          <SocialButton fill type="telegram" :size="40" />
          <SocialButton fill type="whatsapp" :size="40" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped></style>
