<script setup lang="ts">

const props = defineProps<{
  to: string
  component: string
}>()
</script>

<template>
  <RouterLink :to="props.to" active-class="text-green-logo">
    <Component :is="props.component" class="icon size-6 max-md:size-4" @touchstart.passive="() => {}"/>
  </RouterLink>
</template>
