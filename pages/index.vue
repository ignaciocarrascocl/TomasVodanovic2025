<template>
  <div id="fullpage ">
    <!-- Section 1 with background cover and bottom image -->
    <div class="section section-1 d-flex align-items-end flex-column justify-content-center">
   <!-- Background and Bottom Images -->
   <img src="assets/img/bottombg.png" alt="" class="bottom-img">

<!-- Bootstrap Container for Columns -->
<div class="container h-100 zindex">
  <div class="row h-100 align-items-center">
    <!-- Left Column -->
    <div class="imageSlider order-md-1 order-2 col-md-6 h-100 h-auto-sm d-flex flex-column justify-content-end">
      <ChangingImage/>
    </div>
    
    <!-- Right Column -->
    <div class="order-md-2  col-md-6 text-right ">
      <img src="assets/img/logo.png" alt="" class="img-fluid animate__animated animate__fadeInDown">
      <div class="bajada mt-3 fs-3 text-center animate__animated animate__fadeInDown"><span class="highlighted ">Vota este 26 y 27 de octubre</span><br> en las elecciones municipales de Maipú</div>
   <HomeButtons />
   </div>
  </div>
</div>
    </div>
  </div>
  <SocialIcons />
</template>

<script setup>

</script>
<style scoped>
.__nuxt {
  overflow: hidden;
}
.section-1 {
  background-image: url(assets/img/bg.png);
  background-size: cover;
  height: 100vh;
  position: relative;
}
@media (max-width: 576px) { /* Adjust the breakpoint as needed */
  .section-1 {
    background-image: none;
  background-color: #223B82;
  height: auto;
  padding-top: 6rem;
  }
  .imageSlider {
    height: 100vh;
  }

}
.bottom-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  height: 2%;
}

.bajada {
  color: white;
}

.highlighted {
  background-color: #F9C20E;
  color: #223B82;
  padding: 0 1rem;
}
</style>
