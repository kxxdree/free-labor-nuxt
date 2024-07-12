// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: [`~/assets/style/main.scss`],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "АНО «Цифровой регион. Липецк»",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Веб-версия АНО «Цифровой регион. Липецк»",
        },
        {
          name: "keywords",
          content: "ОБУ ИТЦ, АНО «Цифровой регион. Липецк», Веб-версия АНО «Цифровой регион. Липецк»",
        },
        { name: "author", content: "ОБУ ИТЦ" },
      ],
    },
  },
});
