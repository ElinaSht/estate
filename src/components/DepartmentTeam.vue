<script setup lang="ts">
import type { TeamMember } from '@/types/team-member.ts'

const props = defineProps<{
  title: string
  members: TeamMember[]
}>()
</script>

<template>
  <div class="flex flex-col gap-[40px] max-sm:gap-[20px]">
    <div class="font-merriweather text-[36px] max-sm:text-[21px]">{{ props.title }}</div>

    <div class="flex justify-between gap-[10px] flex-wrap max-sm:gap-[20px]">
      <TeamCard v-for="member in props.members" :key="member.name" :member class="mx-auto" />
    </div>
  </div>
</template>

<style scoped></style>
