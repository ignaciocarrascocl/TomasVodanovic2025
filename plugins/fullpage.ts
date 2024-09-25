import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    const fullpage = await import('fullpage.js');
    nuxtApp.provide('fullpage', fullpage.default);
  }
});