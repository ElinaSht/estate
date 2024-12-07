<script setup lang="ts">
import TheTag from '@/components/PostTag.vue'
import { postsMock } from '@/mocks/posts.ts'
import { PostType } from '@/types/post-type.ts'
import ThePagination from '@/components/ThePagination.vue'

const posts = postsMock

const filter = ref<PostType>()
const filteredPosts = computed(() => posts.filter(post => !filter.value || post.type === filter.value))

const pageIndex = ref<number>(0)
const pageSize = 9
const pagePosts = computed(() => filteredPosts.value.slice(pageIndex.value, pageIndex.value + pageSize))
const pageAmount = computed(() => Math.ceil(filteredPosts.value.length / pageSize))

function setFilter(post?: PostType) {
  filter.value = post
  pageIndex.value = 0
}
</script>
<template>
  <div
    id="newsHeader"
    class="mb-[52px] mt-[32px] pt-[20px] mx-auto text-[36px] leading-snug font-bold text-black-gray-text text-center
           md:max-lg:mb-[42px] md:max-lg:mt-[22px] max-md:mb-[32px] max-md:mt-[12px] max-md:text-[30px] max-sm:mb-[22px] max-sm:mt-[2px]"
  >
    Новости и статьи
  </div>

  <div class="w-full mb-[52px] flex gap-[15px] justify-center md:max-lg:mb-[42px] max-md:mb-[32px] max-sm:flex-col max-sm:items-center max-sm:gap-[8px]">
    <TheTag label="Все новости и статьи" :active="!filter" @click="setFilter()" />
    <TheTag label="Новости" :active="filter === PostType.NEWS" @click="setFilter(PostType.NEWS)" />
    <TheTag label="Статьи" :active="filter === PostType.ARTICLE" @click="setFilter(PostType.ARTICLE)" />
  </div>

  <div class="max-w-[1304px] mx-auto px-4 gap-6 flex flex-wrap overflow-hidden align-middle">
      <PostCard v-for="post of pagePosts" :key="post.id" :post="post" class="w-[calc((100%-48px)/3)] max-sm:w-full" />
  </div>

  <ThePagination v-model:current="pageIndex" :total="pageAmount"/>
</template>
