<script setup lang="ts">
</script>

<template>
  <div class="bg-black-gray-text w-full mt-[52px]">
    <div class="bg-black-gray w-full h-[406px] sm:max-md:h-[300px] max-sm:h-max">
      <div class="max-w-[1304px] px-4 mx-auto pt-[70px] text-white flex justify-between lg:max-xl:pt-[50px] max-lg:pt-[30px] max-sm:pb-[30px] max-sm:flex-col max-sm:gap-6">
        <div class="max-w-[300px] flex flex-col sm:max-lg:max-w-[220px] sm:max-md:max-w-[180px] max-sm:mx-auto max-sm:items-center">
          <RouterLink to="/">
              <img class="w-[216px] pt-[8px] sm:max-lg:w-[180px] max-md:w-[150px] pointer-events-none" alt="ElcorePLC" src="../assets/logo.svg?url" />
          </RouterLink>

          <div class="mt-[28px] mb-[13px] text-[18px] font-bold md:max-lg:text-[16px] max-md:text-[14px] max-sm:my-[13px] max-sm:text-center">Платформа для автоматизации ваших процессов</div>

          <div
            class="w-[155px] min-h-[46px] border-[1px] flex gap-2.5 border-gray-dark-4 rounded cursor-pointer
                   hover:scale-110 transition sm:max-md:w-[120px] max-sm:self-center max-sm:w-[200px] max-sm:justify-center max-sm:hover:scale-100"
          >
            <img class="ml-[11px] max-sm:ml-0" alt="Download" src="../assets/download.svg?url" />

            <img class="max-md:w-[58px]" alt="Desktop" src="../assets/desktop.svg?url">
          </div>

          <div class="mt-[33px] text-[18px] font-bold md:max-lg:text-[14px] max-md:text-[10px] max-sm:mt-[23px]">© ООО «НПО «Фарватер» 2024</div>
        </div>

        <div class="flex gap-[120px] lg:max-xl:gap-[40px] max-lg:gap-[20px] max-sm:flex-col">
          <div class="flex flex-col gap-[26px] sm:max-md:gap-[18px] max-sm:gap-[10px] max-sm:items-center">
            <div class="text-gray-dark-3 font-bold text-[24px] md:max-lg:text-[18px] max-md:text-[16px]">Платформа</div>

            <div class="flex flex-col gap-[18px] text-[18px] md:max-lg:text-[14px] max-md:gap-[8px] max-md:text-[12px] max-sm:items-center">
                <RouterLink to="/elcorestore">
                  <div class="link">ElcoreStore</div>
                </RouterLink>

                <RouterLink to="/elcorecloud">
                  <div class="link">ElcoreCloud</div>
                </RouterLink>

              <RouterLink to="/elcoreide">
                <div class="link">ElcoreIDE</div>
              </RouterLink>

            </div>
          </div>

          <div class="flex flex-col gap-[26px] sm:max-md:gap-[18px] max-sm:gap-[10px]">
            <div class="text-gray-dark-3 font-bold text-[24px] md:max-lg:text-[18px] max-md:text-[16px] max-sm:self-center">Обучение и ресурсы</div>

            <div class="flex flex-col gap-[18px] text-[18px] md:max-lg:text-[14px] max-md:gap-[8px] max-md:text-[12px] max-sm:items-center">
              <div class="link">Что такое ElcorePLC</div>
              <div class="link">Документация</div>
              <div class="link">Обучающие материалы</div>
              <div class="link">Примеры использования</div>
              <div class="link">База знаний</div>
            </div>
          </div>

          <div class="flex flex-col gap-[26px] sm:max-md:gap-[18px]">
            <button
              class="h-[47px] px-[17px] border-[1px] border-white rounded text-white font-bold text-[18px]
                   hover:border-green-logo hover:text-green-logo transition max-lg:text-[12px] max-sm:h-[38px] max-sm:self-center max-sm:w-[200px]">
              Личный кабинет
            </button>

            <div class="flex flex-col gap-[18px] text-[18px] md:max-lg:text-[14px] max-md:gap-[8px] sm:max-md:text-[12px] max-sm:text-[10px] max-sm:items-center">
              <div class="link">Контакты</div>
              <div class="link">Новости и статьи</div>
              <div class="link">Сообщество (Форум)</div>
              <div class="link">Тех поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[1304px] mx-auto px-4 py-7 flex justify-between max-sm:flex-col max-sm:gap-[16px] max-sm:py-4 max-sm:items-center">
      <SocialNetwork />

      <div class="flex gap-[22px] text-gray-dark-1 sm:max-lg:text-[14px] max-sm:text-[10px] max-sm:flex-col max-sm:gap-[6px] max-sm:items-center">
        <div class="link">Политика конфиденциальности</div>
        <div class="link">Карта сайта</div>
      </div>

    </div>

  </div>

</template>
