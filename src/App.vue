<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'

const route = useRoute()

useHead({
  title: () => route.meta.title || 'ElcorePLC',
})

const root = shallowRef<HTMLDivElement>()
watch(route, () => root.value?.scrollTo(0,0))
</script>
<template>
  <div ref="root" class="overflow-auto size-full">
    <TheHeader />

    <BreadCrumbs class="mt-[52px] md:max-lg:mt-[42px] sm:max-md:mt-[32px] max-sm:mt-[22px]" />

    <RouterView />

    <TheFooter />
  </div>
</template>
