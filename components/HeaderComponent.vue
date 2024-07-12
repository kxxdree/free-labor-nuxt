<template>
  <header class="flex items-center justify-between py-[1.25rem] px-6 sm:px-24">
    <nuxt-link to="/">
      <img src="public/images/header-logo.svg" alt="Logo" class="w-10" />
    </nuxt-link>
    <nav class="hidden sm:flex gap-10 no-underline text-[#191135] text-base font-light leading-[1.5]">
      <a href="/#mission" class="link">О нас</a>
      <a href="/#vacancies" class="link">Вакансии</a>
      <nuxt-link to="purchases" class="link">Закупки</nuxt-link>
      <a href="/#contacts" class="link">Контакты</a>
    </nav>
    <img src="/public/images/menu-burger.svg" alt="menu" class="sm:hidden" />
  </header>
</template>
