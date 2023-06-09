// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/app.scss'],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import 'assets/styles/_colors.scss';
          @import 'assets/styles/_variables.scss';
          @import 'assets/styles/_mixins.scss';
        `,
        },
      },
    },
  },
})
