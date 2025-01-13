<script setup lang="ts">
const props = defineProps<{
  to?: string
  label: string
}>()
</script>

<template>
  <RouterLink v-if="props.to" :to="props.to" active-class="text-green-logo">
    <div class="link" @touchstart.passive="() => {}">
      {{ props.label }}
    </div>
  </RouterLink>

  <div v-else class="link" @touchstart.passive="() => {}">
    {{ props.label }}
  </div>
</template>
