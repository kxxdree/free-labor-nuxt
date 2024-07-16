<script setup></script>

<template>
  <div class="h-screen flex flex-col content">
    <header-component />
    <main class="sm:py-16 sm:px-24" id="purchases">
      <section class="flex flex-col gap-4 mb-8 px-6">
        <p class="text-[#5f42c3] font-normal sm:text-xl leading-[1.4]">Обновлено 10 июля 2024 года</p>
        <h2 class="font-medium sm:text-[4rem] leading-[1.25]">Информация о закупках</h2>
      </section>
      <section class="max-w-screen overflow-x-auto px-6">
        <table class="border-spacing-0 w-full table-container">
          <thead class="bg-[#f3f0ff]">
            <tr>
              <th class="text-start rounded-l-2xl">Наименование закупки</th>
              <th class="text-start">Номер закупки</th>
              <th class="text-start">Дата начала подачи заявок</th>
              <th class="text-start">Дата окончания подачи заявок</th>
              <th class="text-start">Текущий статус</th>
              <th class="text-start">Начальная (максимальная) цена договора</th>
              <th class="text-center">Документация</th>
              <th class="text-center rounded-r-2xl">Извещения/Протоколы заседания комиссии</th>
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
              <td class="documentation grid grid-cols-2 gap-2">
                <img src="public/images/pdf.svg" alt="Doc" class="doc-img" />
                <img src="public/images/pdf.svg" alt="Doc" class="doc-img" />
                <img src="public/images/pdf.svg" alt="Doc" class="doc-img" />
                <img src="public/images/pdf.svg" alt="Doc" class="doc-img" />
              </td>
              <td>

                <img src="public/images/zip.svg" alt="Doc" class="doc-img" />
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
@media (min-width: 640px) {
  .content {
    background-image: none;
  }
}

.table-container thead tr th {
  padding: 0.5rem 1rem;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.4;
}

.table-container tbody tr {
  border-bottom: 1px solid #1911350f;
}

.table-container tbody tr td {
  padding: 1rem;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: start;
  vertical-align: top;
}

.doc-img {
  width: 2.5rem;
}

.documentation {
  text-align: center !important;
}
</style>
