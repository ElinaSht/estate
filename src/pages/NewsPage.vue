<script setup lang="ts">
import { postsMock } from '@/mocks/posts.ts'

const props = defineProps<{
  id: string
}>()

const news = postsMock.find(item => item.id.toString() === props.id)
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="page-header">
      {{ news!.header }}
    </div>

    <img
      alt="Image"
      src="../assets/empty-image.png"
      class="pointer-events-none"
    />

    <div class="text-gray-dark-3 text-[14px] md:max-lg:text-[12px] max-md:text-[10px] m-[32px] md:max-lg:m-[22px] max-md:m-[12px]">
      {{ news!.date }}
    </div>

    <div class="text-black-gray-text text-center md:max-lg:text-[14px] max-md:text-[12px]">
      {{ news!.description }}
    </div>
  </div>
</template>
