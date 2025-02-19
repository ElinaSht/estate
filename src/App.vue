<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
import { teamInvestDepartment, teamMarketingDepartment } from '@/consts/team.ts'

const opened = ref(false)
</script>

<template>
  <div class="flex flex-col size-full" :class="opened ? 'overflow-hidden' : 'overflow-auto'">
    <div class="sticky z-10 top-0 bg-white/70 backdrop-blur-lg">
      <TheHeader v-model:opened="opened" class="shrink-0 max-w-[1328px] px-[24px] mx-auto" />
    </div>

    <div>
      <div class="flex flex-col max-w-[1328px] px-[24px] mx-auto max-sm:px-0">
        <TheIntroFrame />

        <div class="flex flex-col gap-[60px] mt-[92px] mb-[80px] max-md:my-[40px] max-md:gap-[40px] max-sm:px-[24px]">
          <DepartmentTeam :members="teamInvestDepartment" title="Инвестиционный отдел" />
          <DepartmentTeam :members="teamMarketingDepartment" title="Маркетинг" />
        </div>
      </div>
    </div>

    <div class="flex bg-spm-blue-footer">
      <TheFooter class="max-w-[1328px] px-[24px] w-full mx-auto" />
    </div>
  </div>
</template>
