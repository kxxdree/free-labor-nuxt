<template>
  <footer class="flex flex-col sm:flex sm:flex-row items-start sm:items-center sm:justify-between py-10 px-6 sm:px-24 border-t-2 border-[#1911351a]">
    <nuxt-link to="/">
      <img src="public/images/footer-logo.svg" alt="Logo" class="max-h-14 mb-10 sm:mb-0" />
    </nuxt-link>
    <nav
      class="flex flex-col flex-wrap w-4/5 sm:w-full sm:justify-end max-h-48 sm:flex sm:flex-row gap-8 text-[#191135] text-base no-underline leading-[1.5] font-light"
    >
      <nuxt-link href="/#mission" class="link">О нас</nuxt-link>
      <nuxt-link href="/#vacancies" class="link">Вакансии</nuxt-link>
      <nuxt-link to="/purchases" class="link">Закупки</nuxt-link>
      <nuxt-link href="/#contacts" class="link">Контакты</nuxt-link>
    </nav>
  </footer>
</template>
