<script setup lang="ts">
import { postsMock } from '@/mocks/posts.ts'

const props = defineProps<{
  id: string
}>()

const article = postsMock.find(item => item.id.toString() === props.id)
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="page-header">
      {{ article!.header }}
    </div>

    <img
      alt="Image"
      src="../assets/empty-image.png"
      class="pointer-events-none mb-[32px] md:max-lg:mb-[22px] max-md:mb-[12px]"
    />

    <div class="text-black-gray-text md:max-lg:text-[14px] max-md:text-[12px]">
      {{ article!.description }}
    </div>
  </div>
</template>
