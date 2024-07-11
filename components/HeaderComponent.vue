<template>
  <header class="flex items-center justify-between py-[1.25rem] px-6 mb-6 sm:px-24 sm:mb-24">
    <nuxt-link to="/">
      <img src="public/images/header-logo.svg" alt="Logo" class="w-10" />
    </nuxt-link>
    <nav class="hidden sm:flex gap-10 no-underline text-[#191135] leading-[1.5]">
      <a href="#mission">О нас</a>
      <a href="#vacancies">Вакансии</a>
      <nuxt-link to="purchases">Закупки</nuxt-link>
      <a href="#contacts">Контакты</a>
    </nav>
    <img src="/public/images/menu-burger.svg" alt="menu" class="sm:hidden" />
  </header>
</template>
