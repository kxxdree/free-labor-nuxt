<script setup></script>

<template>
  <div class="h-screen flex flex-col content">
    <header-component />
    <main class="py-16 px-24" id="purchases">
      <section class="flex flex-col gap-4 mb-8">
        <p class="text-[#5f42c3] font-normal text-xl leading-[1.4]">Обновлено 10 июля 2024 года</p>
        <h2 class="font-medium text-[4rem] leading-[1.25]">Информация о закупках</h2>
      </section>
      <section>
        <table class="border-spacing-0 w-full table">
          <thead class="bg-[#f3f0ff]">
            <tr>
              <th class="text-start w-[18.75rem] rounded-l-2xl">Наименование закупки</th>
              <th class="text-start w-[7.5rem]">Номер закупки</th>
              <th class="text-start w-[7.5rem]">Дата начала подачи заявок</th>
              <th class="text-start w-[7.5rem]">Дата окончания подачи заявок</th>
              <th class="text-start w-[8.125rem]">Текущий статус</th>
              <th class="text-start w-[11.25rem]">Начальная (максимальная) цена договора</th>
              <th class="text-center w-[8.7rem]">Документация</th>
              <th class="text-center w-[8.7rem] rounded-r-2xl">Извещения/Протоколы заседания комиссии</th>
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
                <img src="public/images/pdf.svg" alt="Doc" class="doc-img" />
                <img src="public/images/pdf.svg" alt="Doc" class="doc-img" />
                <img src="public/images/pdf.svg" alt="Doc" class="doc-img" />
                <img src="public/images/pdf.svg" alt="Doc" class="doc-img" />
              </td>
              <td>
                <img src="public/images/zip.svg" alt="Doc" class="doc-img" />
                <img src="public/images/zip.svg" alt="Doc" class="doc-img" />
                <img src="public/images/zip.svg" alt="Doc" class="doc-img" />
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

.table thead tr th {
  padding: 0.5rem 1rem;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.4;
}

.table tbody tr {
  border-bottom: 1px solid #1911350f;
}

.table tbody tr td {
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
</style>
