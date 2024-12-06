<script setup lang="ts">
const route = useRoute()

const pathArray = computed(() => route.matched)
</script>

<template>
  <div id="breadcrumbs" class="bg-black-gray-text w-full h-[41px]">
    <div class="max-w-[1304px] mx-auto h-full px-4 flex items-center gap-[10px] text-[12px]">
      <template v-for="(path, index) of pathArray" :key="path.path">
        <div v-if="index" class="text-gray-light-4">/</div>

        <RouterLink :to="path.path">
          <div class="text-gray-light-4">{{ path.meta.title }}</div>
        </RouterLink>
      </template>
    </div>
  </div>
</template>
