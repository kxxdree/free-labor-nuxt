<script setup>
const tableHead = ref([
  {
    title: "Наименование закупки",
    style: "w-[18.75rem]",
  },
  {
    title: "Номер закупки",
    style: "w-[7.5rem]",
  },
  {
    title: "Дата начала подачи заявок",
    style: "w-[7.5rem]",
  },
  {
    title: "Дата окончания подачи заявок",
    style: "w-[7.5rem]",
  },
  {
    title: "Текущий статус",
    style: "w-[8.125rem]",
  },
  {
    title: "Начальная (максимальная) цена договора",
    style: "w-[11.25rem]",
  },
  {
    title: "Документация",
    style: "w-[8.7rem]",
  },
  {
    title: "Извещения/Протоколы заседания комиссии",
    style: "w-[8.7rem]",
  },
]);
</script>

<template>
  <div class="h-screen flex flex-col">
    <header-component />
    <main class="py-16 px-24">
      <section class="flex flex-col gap-4 mb-8">
        <p class="text-[#5f42c3] font-normal text-xl leading-[1.4]">Обновлено 10 июля 2024 года</p>
        <h2 class="font-medium text-[4rem] leading-[1.25]">Информация о закупках</h2>
      </section>
      <section>
        <table class="border-spacing-0 w-full table">
          <thead class="bg-[#f3f0ff]">
            <tr>
              <th
                v-for="title in tableHead"
                :key="title"
                :class="[title.style, 'py-2', 'px-4', 'font-light', 'text-[0.875rem]', 'leading-[1.4]', 'text-start']"
              >
                {{ title.title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Запрос цен на оказание автотранспортных услуг для нужд Филиала автономной некоммерческой организации «Дирекция по информационно-аналитическому
                сопровождению государственной программы Российской Федерации „Социально-экономическое развитие Республики Крым и г. Севастополя“ (г. Москва)»
              </td>
              <td>01-02-10/6</td>
              <td>24.01.2024 09:00 (МСК)</td>
              <td>01.02.2024 09:30 (МСК)</td>
              <td>Завершено</td>
              <td>3 843 378, 00 руб</td>
              <td>
                <img src="public/images/pdf.svg" alt="Doc" />
                <img src="public/images/pdf.svg" alt="Doc" />
                <img src="public/images/pdf.svg" alt="Doc" />
                <img src="public/images/pdf.svg" alt="Doc" />
              </td>
              <td class="text-center">
                <img src="public/images/zip.svg" alt="Doc" />
              </td>
            </tr>
            <tr>
              <td>
                Запрос цен на оказание автотранспортных услуг для нужд Филиала автономной некоммерческой организации «Дирекция по информационно-аналитическому
                сопровождению государственной программы Российской Федерации „Социально-экономическое развитие Республики Крым и г. Севастополя“ (г. Москва)»
              </td>
              <td>01-02-10/6</td>
              <td>24.01.2024 09:00 (МСК)</td>
              <td>01.02.2024 09:30 (МСК)</td>
              <td>Завершено</td>
              <td>3 843 378, 00 руб</td>
              <td>
                <img src="public/images/pdf.svg" alt="Doc" />
                <img src="public/images/pdf.svg" alt="Doc" />
                <img src="public/images/pdf.svg" alt="Doc" />
                <img src="public/images/pdf.svg" alt="Doc" />
              </td>
              <td>
                <img src="public/images/zip.svg" alt="Doc" />
              </td>
            </tr>
            <tr>
              <td>
                Запрос цен на оказание автотранспортных услуг для нужд Филиала автономной некоммерческой организации «Дирекция по информационно-аналитическому
                сопровождению государственной программы Российской Федерации „Социально-экономическое развитие Республики Крым и г. Севастополя“ (г. Москва)»
              </td>
              <td>01-02-10/6</td>
              <td>24.01.2024 09:00 (МСК)</td>
              <td>01.02.2024 09:30 (МСК)</td>
              <td>Завершено</td>
              <td>3 843 378, 00 руб</td>
              <td>
                <img src="public/images/pdf.svg" alt="Doc" />
                <img src="public/images/pdf.svg" alt="Doc" />
                <img src="public/images/pdf.svg" alt="Doc" />
                <img src="public/images/pdf.svg" alt="Doc" />
              </td>
              <td>
                <img src="public/images/zip.svg" alt="Doc" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
    <footer-component class="mt-auto" />
  </div>
</template>

<style lang="scss" scoped>
.table tbody tr td {
  padding: 1rem;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: start;
  vertical-align: top;
  border-bottom: 1px solid #1911350f;
}
</style>
