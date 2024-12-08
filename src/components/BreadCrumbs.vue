<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.matched)
</script>

<template>
  <div id="breadcrumbs" class="bg-black-gray-text w-full h-[41px]">
    <div class="max-w-[1304px] mx-auto h-full px-4 flex items-center gap-[10px] text-[12px]">
      <template v-for="(segment, index) of path" :key="segment.path">
        <div v-if="index" class="text-gray-light-4">/</div>

        <RouterLink :to="segment.path">
          <div
            class="link"
            :class="index < (path.length - 1) ? 'text-gray-light-4' : 'text-white'"
            @touchstart.passive="() => {}"
          >
            {{ segment.meta.title }}
          </div>
        </RouterLink>
      </template>
    </div>
  </div>
</template>
