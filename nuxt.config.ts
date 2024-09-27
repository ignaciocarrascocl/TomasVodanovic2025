export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '@/assets/main.css',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  'animate.css/animate.min.css'
 ],
    
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Basic: [400] // Load the 400 weight of the "Basic" font
    }
  }

})