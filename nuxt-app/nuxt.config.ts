// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-11-08",
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/auth-next",
    "@nuxtjs/axios"
  ],

  axios: {
    baseUrl: 'http://localhost:3000/api',
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
        },
        user: {
          property: 'user',
          // или оставьте пустым, если API возвращает все данные пользователя
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' },
        },
      },
    },
  },
})