<script setup lang="ts">
import SocialNetwork from '@/components/SocialNetwork.vue'
import Sidebar from '@/components/TheSidebar.vue'

</script>

<template>
  <div class="bg-black-gray-text w-full max-sm:sticky max-sm:top-0">
    <div class="max-w-[1304px] h-[52px] mx-auto py-3 px-4 flex justify-between max-sm:flex-col">
      <SocialNetwork class="max-sm:hidden"/>

      <div class="flex gap-14 md:max-lg:gap-6 max-md:gap-4">
        <div class="flex gap-[30px] items-center text-white text-[15px] font-bold md:max-lg:gap-[20px] sm:max-lg:text-[12px] sm:max-md:gap-[16px] max-sm:hidden">
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

        <div class="flex gap-[30px] items-center md:max-lg:gap-[20px] max-md:gap-[16px] max-sm:ml-auto">
          <RouterLink to="favourites">
            <img class="size-6 cursor-pointer hover:scale-125 transition max-md:size-4" alt="Favourites" src="../assets/favourites.svg" />
          </RouterLink>

          <RouterLink to="shoppingList">
            <img class="size-6 cursor-pointer hover:scale-125 transition max-md:size-4" alt="Shopping cart" src="../assets/shopping-cart.svg" />
          </RouterLink>

          <button class="h-7 px-3.5 rounded bg-green-links border-green-links text-white text-[14px] hover:scale-105 transition">Личный кабинет</button>
        </div>
      </div>
    </div>

    <div class="bg-black-gray w-full h-[103px] flex max-sm:h-[80px]">
      <div class="max-w-[1304px] mx-auto px-4 flex-1 flex justify-between items-center text-white">
        <RouterLink to="/">
          <div>
            <img alt="ElcorePLC" src="../assets/logo.svg"
                 class="lg:max-xl:w-[170px] md:max-lg:w-[140px] sm:max-md:w-[100px] max-sm:w-[150px]" />
          </div>
        </RouterLink>

        <div class="flex gap-10 text-[18px] font-bold lg:max-xl:gap-6 md:max-lg:text-[14px] md:max-lg:gap-3 sm:max-md:text-[12px] sm:max-md:gap-2 max-sm:hidden">
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
            <div class="flex gap-2 items-center link sm:max-md:gap-0.5">
              <div>Обучение и ресурсы</div>
              <img class="w-[13px] h-2.5 sm:max-md:w-[10px] sm:max-md:h-1.5" alt="Menu" src="../assets/menu.svg" />
            </div>
          </RouterLink>

          <RouterLink to="news">
            <div class="link">Новости и статьи</div>
          </RouterLink>
        </div>

        <Sidebar />
      </div>
    </div>

  </div>
</template>
