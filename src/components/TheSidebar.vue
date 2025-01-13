<script setup lang="ts">
import IconSandwich from '../assets/sandwich.svg'
import IconBack from '../assets/end.svg'
import StringLink from '@/components/StringLink.vue'

const showed = ref<boolean>(false)

const route = useRoute()
watch(route, () => showed.value = false)
</script>

<template>
  <div>
    <div
      class="relative"
      @click="showed = !showed"
    >
      <IconSandwich
        class="icon text-white lg:max-xl:w-[30px] md:max-lg:w-[20px] max-md:w-[18px]"
        @touchstart.passive="() => {}"
      />
    </div>

    <SideModal v-model:showed="showed" class="sm:hidden">
      <div class="w-full flex items-center">
        <RouterLink to="/" class="transition active:scale-95 p-[20px] flex-1" @touchstart.passive="() => {}">
          <img alt="ElcorePLC" src="../assets/logo.svg?url" class="w-[120px] sm:max-md:w-[160px] md:w-[180px]" />
        </RouterLink>

        <div class="p-[20px] flex items-center justify-center ml-auto" @click="showed = false">
          <IconBack class="icon size-[18px]" />
        </div>
      </div>

      <div class="p-[20px] flex flex-col gap-6 items-center rounded md:gap-8">

        <SocialNetwork />

        <div class="h-[1px] w-full bg-gray-dark-3" />

        <div
          class="flex gap-[32px] items-center text-white text-[10px] font-bold sm:max-md:text-[12px] md:text-[14px]">
          <StringLink to="/forum" label="Форум"/>
          <StringLink to="/search" label="Поиск"/>
          <StringLink to="/contacts" label="Контакты"/>
        </div>

        <div class="h-[1px] w-full bg-gray-dark-3" />

        <div class="flex flex-col gap-4 items-center text-[12px] font-bold sm:max-md:text-[14px] md:text-[16px]">
          <StringLink to="/elcorestore" label="ElcoreStore"/>
          <StringLink to="/elcorecloud" label="ElcoreCloud"/>
          <StringLink to="/elcoreide" label="ElcoreIDE"/>
          <StringLink to="/studyResources" label="Обучение и ресурсы"/>
          <StringLink to="/newsArticles" label="Новости и статьи"/>
        </div>
      </div>
    </SideModal>
  </div>
</template>
