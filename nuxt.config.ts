export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '@/assets/main.css',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  'animate.css/animate.min.css'
 ],
 app: {
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  }
},

  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Basic: [400] // Load the 400 weight of the "Basic" font
    }
  }

})