<script setup lang="ts">
import IconSandwich from '../assets/sandwich.svg'
import IconBack from '../assets/end.svg'

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
      />
    </div>

    <SideModal v-model:showed="showed" class="sm:hidden">
      <div class="w-full flex justify-end p-[20px]" @click="showed = false">
        <IconBack class="icon size-[20px]" />
      </div>

      <div class="p-[20px] flex flex-col gap-6 items-center rounded md:gap-8">
        <RouterLink to="/" class="transition active:scale-95">
          <img alt="ElcorePLC" src="../assets/logo.svg?url" class="w-[120px] sm:max-md:w-[160px] md:w-[180px]" />
        </RouterLink>

        <SocialNetwork />

        <div class="h-[1px] w-full bg-gray-dark-3" />

        <div
          class="flex gap-[32px] items-center text-white text-[10px] font-bold sm:max-md:text-[12px] md:text-[14px]">
          <RouterLink to="/forum" active-class="text-green-logo">
            <div class="link">Форум</div>
          </RouterLink>

          <RouterLink to="/search" active-class="text-green-logo">
            <div class="link">Поиск</div>
          </RouterLink>

          <RouterLink to="/contacts" active-class="text-green-logo">
            <div class="link">Контакты</div>
          </RouterLink>
        </div>

        <div class="h-[1px] w-full bg-gray-dark-3" />

        <div class="flex flex-col gap-4 items-center text-[12px] font-bold sm:max-md:text-[14px] md:text-[16px]">
          <RouterLink to="/elcorestore" active-class="text-green-logo">
            <div class="link">ElcoreStore</div>
          </RouterLink>

          <RouterLink to="/elcorecloud" active-class="text-green-logo">
            <div class="link">ElcoreCloud</div>
          </RouterLink>

          <RouterLink to="/elcoreide" active-class="text-green-logo">
            <div class="link">ElcoreIDE</div>
          </RouterLink>

          <RouterLink to="/studyResources" active-class="text-green-logo">
            <div class="link flex gap-2 items-center">
              <div>Обучение и ресурсы</div>
            </div>
          </RouterLink>

          <RouterLink to="/news" active-class="text-green-logo">
            <div class="link">Новости и статьи</div>
          </RouterLink>
        </div>
      </div>
    </SideModal>
  </div>
</template>
