<template>
  <div id="fullpage">
    <!-- This section should use "assets/img/figura.png" as cover background.
    This section shoul have an image at the bottom "assets/img/bottombg.png" -->
    <div class="section section-1">

      <!-- Columna izquierda. -->
      <img src="assets/img/tomas.png" alt="">

      <!-- Columna derecha. -->
      <img src="assets/img/logo.png" alt="">
      <button>DESCARGA EL PROGRAMA</button>
      <button>REGISTRO VOLUNTARIOS</button>

      <!-- Fixed on right side: -->
      <div class="d-flex justify-content-center">
        <a href="https://instagram.com" target="_blank" class="mx-3 text-dark">
          <i class="bi bi-instagram" style="font-size: 2rem;"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="mx-3 text-dark">
          <i class="bi bi-twitter" style="font-size: 2rem;"></i>
        </a>
        <a href="https://facebook.com" target="_blank" class="mx-3 text-dark">
          <i class="bi bi-facebook" style="font-size: 2rem;"></i>
        </a>
      </div>
    </div>

    <div class="section section-2">Section 2</div>
    <div class="section section-3">Section 3</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNuxtApp } from '#app';

onMounted(() => {
  if (process.client) {
    const { $fullpage } = useNuxtApp();

    new $fullpage('#fullpage', {
      // Options for fullpage.js
      autoScrolling: true,
      navigation: true
    });
  }
});
</script>

<style scoped>
.section-1 {
  background-color: #223B82;
  height: 100vh;
}

.section-2 {
  background-color: #E64549;
  height: 100vh;
}

.section-3 {
  background-color: #36A3DC;
  height: 100vh;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
}
</style>
