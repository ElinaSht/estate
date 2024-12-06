<script setup lang="ts">
import type { Post } from '@/types/post.ts'
import { PostType } from '@/types/post-type.ts'

const props = defineProps<{
  post: Post
}>()
</script>

<template>
  <div class="flex flex-col gap-2.5 md:max-lg:gap-1.5 max-md:gap-1 max-sm:mx-auto max-sm:max-w-[408px]">
    <div>
      <img alt="Empty image" src="../assets/empty-image.png" />
    </div>

    <div class="flex gap-2.5 text-gray-dark-3 text-[14px] md:max-lg:text-[12px] max-md:text-[10px]">
      <div v-if="props.post.type === PostType.NEWS">{{ props.post.date }}</div>
      <div v-if="props.post.type === PostType.NEWS">/</div>
      <div>{{ props.post.type }}</div>
    </div>

    <div class="text-[24px] font-bold text-black-gray-text md:max-lg:text-[20px] max-md:text-[16px]">{{ props.post.header }}</div>

    <div class="text-black-gray-text md:max-lg:text-[14px] max-md:text-[12px]">{{ props.post.description }}</div>
  </div>
</template>
