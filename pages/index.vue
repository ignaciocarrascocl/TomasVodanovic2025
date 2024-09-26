<template>
  <div id="fullpage">
    <!-- Section 1 with background cover and bottom image -->
    <div class="section section-1 d-flex align-items-end flex-column">
      <Section1/>
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
  background-image: url(assets/img/bg.png);
  background-size: cover;
  height: 100vh;
  position: relative;
}

/* Full height sections */
.section-2 {
  background-color: #E64549;
  height: 100vh;
}

.section-3 {
  background-color: #36A3DC;
  height: 100vh;
}

</style>
