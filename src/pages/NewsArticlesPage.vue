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
  <div>
    <div id="newsHeader" class="page-header">
      Новости и статьи
    </div>

    <div
      class="w-full mb-[52px] flex gap-[15px] justify-center md:max-lg:mb-[42px] max-md:mb-[32px] max-sm:flex-col max-sm:items-center max-sm:gap-[8px]">
      <TheTag label="Все новости и статьи" :active="!filter" @click="setFilter()" />
      <TheTag label="Новости" :active="filter === PostType.NEWS" @click="setFilter(PostType.NEWS)" />
      <TheTag label="Статьи" :active="filter === PostType.ARTICLE" @click="setFilter(PostType.ARTICLE)" />
    </div>

    <div class="flex flex-wrap align-middle">
      <PostCard v-for="post of pagePosts" :key="post.id" :post="post" />
    </div>

    <ThePagination v-model:current="pageIndex" :total="pageAmount" />
  </div>
</template>
