// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Isso deve permanecer
  // Remova a parte abaixo para evitar o erro
  // build: {
  //   postcss: {
  //     plugins: {
  //       tailwindcss: {},
  //       autoprefixer: {},
  //     },
  //   },
  // },
  css: ['@/assets/css/main.css'],

  compatibilityDate: '2024-08-13',
  modules: ["@nuxt/ui"]
})