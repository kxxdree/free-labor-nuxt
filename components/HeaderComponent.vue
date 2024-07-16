<script setup lang="ts">
const mobileMenuIsOpen = ref(false)
watch(mobileMenuIsOpen, (value) => {
  value ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
})
</script>
<template>
  <header class="flex items-center justify-between py-[1.25rem] px-6 sm:px-24">
    <nuxt-link to="/">
      <img src="public/images/header-logo.svg" alt="Logo" class="w-10"/>
    </nuxt-link>
    <nav class="hidden sm:flex gap-10 no-underline text-[#191135] text-base font-light leading-[1.5]">
      <a href="/#mission" class="link">О нас</a>
      <a href="/#vacancies" class="link">Вакансии</a>
      <nuxt-link to="purchases" class="link">Закупки</nuxt-link>
      <a href="/#contacts" class="link">Контакты</a>
    </nav>
    <button @click="mobileMenuIsOpen = true" class="z-10">
      <img src="/public/images/menu-burger.svg" alt="menu" class="sm:hidden"/>
    </button>
  </header>
  <Transition name="fade">
    <div v-if="mobileMenuIsOpen" class="sm:hidden absolute top-0 left-0 z-10 h-[100dvh] w-full bg-black opacity-35"></div>
  </Transition>
  <Transition name="slide-up">
    <div v-if="mobileMenuIsOpen" class="sm:hidden absolute z-20 top-0 left-0 bg-white w-full h-[356px] opacity-100">
      <div class="flex items-center justify-between py-[1.25rem] px-6 sm:px-24 border-b">
        <nuxt-link to="/">
          <img src="public/images/header-logo.svg" alt="Logo" class="w-10"/>
        </nuxt-link>
        <button @click="mobileMenuIsOpen = false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#191135" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div>
        <nav class="py-6 flex flex-col *:px-4 *:py-3.5 *:text-lg">
          <a href="/#mission" @click="mobileMenuIsOpen = false" class="link">О нас</a>
          <a href="/#vacancies" @click="mobileMenuIsOpen = false" class="link">Вакансии</a>
          <nuxt-link to="purchases" @click="mobileMenuIsOpen = false" class="link">Закупки</nuxt-link>
          <a href="/#contacts" @click="mobileMenuIsOpen = false" class="link">Контакты</a>
        </nav>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s, opacity 0.4s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0.5;
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0%);
  opacity: 1;
}
</style>
