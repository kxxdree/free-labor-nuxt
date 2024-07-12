<script setup>
const vacancies = [
  {
    stackTitle: "Машинное обучение",
    stackDescription: "Разработка моделей машинного обучения",
    vacancyName: "ML Engineer",
    vacancyRequirements: ["Опыт работы от 3х лет", "Глубокое понимание Python, FastAPI и PostgreSQL", "Опыт работы с Docker"],
  },
  {
    stackTitle: "Frontend-разработка",
    stackDescription: "Создание интерфейсов веб-сайтов и приложений",
    vacancyName: "Frontend-разработчик",
    vacancyRequirements: ["Опыт работы от 3х лет", "Глубокое понимание Python, FastAPI и PostgreSQL", "Опыт работы с Docker"],
  },

  {
    stackTitle: "Backend-разработка",
    stackDescription: "Разработка бизнес-логики продукта",
    vacancyName: "Backend-разработчик",
    vacancyRequirements: ["Опыт работы от 3х лет", "Глубокое понимание Python, FastAPI и PostgreSQL", "Опыт работы с Docker"],
  },
  {
    stackTitle: "Аналитика данных",
    stackDescription: "Подготовка технических заданий/проектов",
    vacancyName: "Аналитик данных Middle+ / Data Analyst",
    vacancyRequirements: ["Опыт работы от 3х лет", "Глубокое понимание Python, FastAPI и PostgreSQL", "Опыт работы с Docker"],
  },
];

const emailAddress = ref("dr_lipetsk@admlr.lipetsk.ru");
const phoneNumber = ref("+7 (900) 600 10 42");

const copyEmail = () => {
  navigator.clipboard.writeText(emailAddress.value);
  emailAddress.value = "Скопировано";
  setTimeout(() => {
    emailAddress.value = "dr_lipetsk@admlr.lipetsk.ru";
  }, 3000);
};

// const copyPhone = () => {
//   navigator.clipboard.writeText(phoneNumber.value);
//   phoneNumber.value = "Скопировано";
//   setTimeout(() => {
//     phoneNumber.value = "+7 (900) 600 10 42";
//   }, 3000);
// };
</script>

<template>
  <div class="relative content">
    <header-component class="mb-6 sm:mb-[5.5rem]" />
    <img src="public/images/background.svg" class="absolute object-none top-0 sm:hidden" />

    <section class="px-4 sm:px-0 mb-16 sm:mb-28 flex flex-col">
      <div class="sm:max-w-[49.375rem] m-auto mb-10 sm:mb-24">
        <a href="#vacancies">
          <div
            class="flex justify-center gap-1 items-center max-w-fit ml-0 sm:m-auto mb-4 sm:mb-8 bg-[#f3f0ff] text-[#5f42c3] border border-[#1911350f] rounded-2xl cursor-pointer title-content__links relative"
          >
            <p class="text-xs sm:text-sm leading-[1.5] py-0.5 px-2 rounded-2xl bg-white">Собираем команду</p>
            <div class="text-xs sm:text-sm leading-[1.5] py-0.5 px-2 rounded-2xl flex items-center gap-1.5">
              <p>Присоединяйтесь к нам</p>
              <img src="public/images/join-link.svg" alt="Join" />
            </div>
          </div>
        </a>
        <h1 class="text-start sm:text-center font-medium text-4xl sm:text-[4rem] leading-[1.25] mb-3 sm:mb-12">
          Растим <span class="text-[#5f42c3]">кадры</span> в области информационных технологий
        </h1>
        <h2 class="w-full text-start sm:text-center font-extralight text-xl leading-[1.4]">
          Реализуем мероприятия по подготовке высококвалифированных кадров в области информационных технологий
        </h2>
      </div>
      <div class="flex justify-between ml-0 sm:m-auto sm:w-[53.5rem] max-h-8 sm:max-h-16">
        <img src="public/images/sber.svg" alt="Sber" class="w-8 sm:w-16" />
        <img src="public/images/sber-2.svg" alt="Sber" class="w-8 sm:w-16" />
        <img src="public/images/itc.svg" alt="Itc" class="w-8 sm:w-16" />
        <img src="public/images/itc-2.svg" alt="Itc" class="w-8 sm:w-16" />
        <img src="public/images/obl-logo.svg" alt="Region" class="w-8 sm:w-16" />
        <img src="public/images/department.svg" alt="Department" class="w-8 sm:w-16" />
      </div>
    </section>

    <main class="py-2 px-4 sm:py-16 sm:px-24">
      <section class="flex flex-col sm:flex sm:flex-row gap-12 sm:gap-16 sm:max-h-[40rem] justify-between" id="mission">
        <div class="flex flex-col max-w-[38rem]">
          <div class="block-titles">
            <p class="block-uptitle">Наша миссия</p>
            <h3 class="block-title">Создаём среду для подготовки IT-специалистов</h3>
          </div>
          <ul class="flex flex-col gap-4">
            <li class="font-extralight text-base sm:text-xl leading-[1.5]">
              В 2023 году словом года стало «нейросеть». Этот термин оказался наиболее популярным в поисковых системах, и вокруг преимуществ и недостатков
              нейросетей велась активная дискуссия как в офлайне, так и в онлайне. Специалисты в области искусственного интеллекта, машинного обучения, Big Data
              и бизнес-аналитики становятся все более популярными, и по мнению экспертов, эти профессии будут наиболее востребованными в мире в ближайшие
              10 лет.
            </li>
            <li class="font-extralight text-base sm:text-xl leading-[1.5]">
              Наш регион также нуждается в талантливых специалистах IT сферы. И наша команда создаёт все условия для подготовки программистов
              в разных направлениях. Мы готовы обучать с нуля, развивать навыки и предлагать работу с уникальными проектами тем, кто уже владеет профессией.
            </li>
            <li class="font-extralight text-base sm:text-xl leading-[1.5]">
              Добавляй наш сайт в закладки и следи за проектами. Если любишь IT, мы друг другу подходим:)
            </li>
          </ul>
        </div>
        <img class="rounded-[1.25rem] sm:max-w-[36rem] object-fill mission-logo" src="public/images/mission-logo.png" alt="Mission" />
      </section>

      <div class="separator"></div>

      <section id="vacancies">
        <div class="block-titles">
          <p class="block-uptitle">Вакансии</p>
          <h3 class="block-title">Присоединяйтесь!</h3>
          <p class="block-subtitle">Мы собираем команду талантливых, креативных и увлечённых</p>
        </div>
        <div class="flex flex-col gap-8 sm:gap-16">
          <div class="flex flex-col sm:flex sm:flex-row sm:justify-between" v-for="vacancy in vacancies" :key="vacancy">
            <div class="mb-6 sm:mb-0 flex flex-col gap-2 sm:max-w-[20rem]">
              <p class="font-extralight text-xl leading-[1.5]">{{ vacancy.stackTitle }}</p>
              <p class="font-extralight text-base leading-[1.25]">{{ vacancy.stackDescription }}</p>
            </div>
            <ul class="flex flex-col sm:w-[48rem] gap-4">
              <li class="flex flex-col gap-8 border border-[#1911351a] rounded-[1.25rem] p-6 vacancy-item">
                <h3 class="font-extralight text-xl leading-[1.4]">{{ vacancy.vacancyName }}</h3>
                <ul class="py-0 px-8 list-disc">
                  <li class="font-extralight text-base leading-[1.25] text-[#191135cc]" v-for="item in vacancy.vacancyRequirements" :key="item">{{ item }}</li>
                </ul>
                <a href="https://t.me/okovale" target="_blank" style="text-decoration: none">
                  <div
                    class="title-content__links flex justify-center gap-1 items-center max-w-fit mb-1 sm:mb-0 bg-[#27a6e51a] text-[#5f42c3] border border-[#1911350f] rounded-2xl cursor-pointer m-0"
                  >
                    <p class="text-sm leading-[1.5] py-0.5 px-2 rounded-2xl bg-white text-[#0988c7]">Telegram</p>
                    <div class="text-sm leading-[1.5] py-0.5 px-2 rounded-2xl flex items-center gap-1.5">
                      <p class="text-[#0988c7]">Написать по вакансии</p>
                      <img src="public/images/join-link-tg.svg" alt="Join" class="w-[0.625rem]" />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div class="separator"></div>

      <section class="pb-10 sm:py-10 px-0" id="contacts">
        <div class="block-titles">
          <p class="block-uptitle">Контакты</p>
          <h3 class="block-title">Пишите-звоните, заходите в гости</h3>
          <p class="block-subtitle mb-1 sm:mb-0">Мы любим знакомиться и открывать новое, точно подружимся, не стесняйтесь!</p>
        </div>
        <ul class="flex flex-col sm:flex sm:flex-row gap-10 sm:gap-16 sm:max-h-[10.2rem]">
          <li class="flex flex-col sm:w-[24rem]">
            <img class="w-10 sm:w-16 mb-4 sm:mb-8" src="public/images/meeting-logo.svg" alt="Meet" />
            <h3 class="font-normal text-[1.625rem] leading-[1.2] sm:mb-2">Готовы встретиться</h3>
            <p class="font-light text-xl leading-[1.5] text-[#5f42c3]">г. Липецк, ул. Советская, 4</p>
          </li>
          <li class="flex flex-col sm:w-[24rem]">
            <img class="w-10 sm:w-16 mb-4 sm:mb-8" src="public/images/mail-logo.svg" alt="Meet" />
            <h3 class="font-normal text-[1.625rem] leading-[1.2] sm:mb-2">Обязательно прочтём</h3>
            <p class="font-light text-xl leading-[1.5] text-[#5f42c3] cursor-pointer contacts-email" @click="copyEmail">{{ emailAddress }}</p>
          </li>
          <li class="flex flex-col sm:w-[24rem]">
            <img class="w-10 sm:w-16 mb-4 sm:mb-8" src="public/images/call-logo.svg" alt="Meet" />
            <h3 class="font-normal text-[1.625rem] leading-[1.2] sm:mb-2">Ждём звонка</h3>
            <p class="font-light text-xl leading-[1.5] text-[#5f42c3] cursor-pointer contacts-phone">{{ phoneNumber }}</p>
          </li>
        </ul>
      </section>
    </main>
    <footer-component />
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 640px) {
  .content {
    background-image: url("public/images/background.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.separator {
  border: 1px solid #1911351a;
  margin: 6rem 0;

  @media (max-width: 650px) {
    margin: 4rem 0;
  }
}

.title-content__links {
  padding: 0.25rem 0.375rem 0.25rem 0.25rem;
}

.block-titles {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.block-uptitle {
  color: #5f42c3;
  font-size: 1.25rem;
  line-height: 1.4;
}

.block-title {
  font-size: 2.5rem;
  line-height: 1.25;
  font-weight: 400;

  @media (max-width: 650px) {
    font-size: 2rem;
  }
}

.block-subtitle {
  font-weight: 200;
  font-size: 1.25rem;
  line-height: 1.4;
}

.mission-logo {
  @media (max-width: 480px) {
    height: 20rem;
  }
}

.vacancy-item:hover {
  cursor: pointer;

  h3 {
    color: #5f42c3;
    transition: ease-in-out 0.2s;
  }
}
</style>
