<script setup lang="ts">
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
      <img class="cursor-pointer hover:scale-105 lg:max-xl:w-[30px] md:max-lg:w-[20px] max-md:w-[18px]" alt="Menu" src="../assets/sandwich.svg" />
    </div>

    <SideModal v-model:showed="showed" class="sm:hidden">
      <div class="p-[20px] flex flex-col gap-6 items-center rounded md:gap-8">
        <img alt="ElcorePLC" src="../assets/logo.svg" class="w-[120px] sm:max-md:w-[160px] md:w-[180px]" />

        <SocialNetwork />

        <div class="h-[1px] w-full bg-gray-dark-3" />

        <div class="flex gap-[32px] items-center text-white text-[10px] font-bold sm:max-md:text-[12px] md:text-[14px]">
          <RouterLink to="forum">
            <div class="link">Форум</div>
          </RouterLink>

          <RouterLink to="search">
            <div class="link">Поиск</div>
          </RouterLink>

          <RouterLink to="contacts">
            <div class="link">Контакты</div>
          </RouterLink>
        </div>

        <div class="h-[1px] w-full bg-gray-dark-3" />

        <div class="flex flex-col gap-4 items-center text-[12px] font-bold sm:max-md:text-[14px] md:text-[16px]">
          <RouterLink to="elcorestore">
            <div class="link">ElcoreStore</div>
          </RouterLink>

          <RouterLink to="elcorecloud">
            <div class="link">ElcoreCloud</div>
          </RouterLink>

          <RouterLink to="elcoreide">
            <div class="link">ElcoreIDE</div>
          </RouterLink>

          <RouterLink to="study">
            <div class="flex gap-2 items-center link">
              <div>Обучение и ресурсы</div>
              <img class="w-[10px]" alt="Menu" src="../assets/menu.svg" />
            </div>
          </RouterLink>

          <RouterLink to="news">
            <div class="link">Новости и статьи</div>
          </RouterLink>
        </div>
      </div>
    </SideModal>
  </div>
</template>
