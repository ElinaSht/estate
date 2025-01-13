<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'

const route = useRoute()

useHead({
  title: () => route.meta.title || 'ElcorePLC',
})

const root = shallowRef<HTMLElement>()
watch(route, () => root.value?.scrollTo(0,0))
</script>
<template>
  <div ref="root" class="overflow-auto size-full">
    <div class="flex flex-col min-h-full">
      <TheHeader />

      <BreadCrumbs class="mt-[52px] md:max-lg:mt-[42px] sm:max-md:mt-[32px] max-sm:mt-[22px]" />

      <div class="flex-1 size-fit min-w-full">
        <RouterView class="max-w-[1304px] mx-auto px-4"/>
      </div>
<!--      <RouterView class="flex-1 size-full"/>-->
<!--      <RouterView class="flex-1 size-fit min-w-full"/>-->

      <TheFooter />
    </div>
    </div>
</template>
