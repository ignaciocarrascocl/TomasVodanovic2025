<template>
   <!-- Background and Bottom Images -->
      <img src="assets/img/bottombg.png" alt="" class="bottom-img">

      <!-- Bootstrap Container for Columns -->
      <div class="container h-100 zindex">
        <div class="row h-100 align-items-center">
          <!-- Left Column -->
          <div class="col-md-6 h-100 h-auto-sm d-flex flex-column justify-content-end">
            <img src="assets/img/tomas.png" alt="" class="img-fluid">
            
          </div>
          
          <!-- Right Column -->
          <div class="col-md-6 text-right pe-4">
            <img src="assets/img/logo.png" alt="" class="img-fluid pe-4">
            <div class="bajada mt-3 fs-1 text-center pe-4"><span class="highlighted">Vota este 26 y 27 de octubre</span><br> en las elecciones municipales de Maipú</div>
         <HomeButtons />
         </div>
        </div>
      </div>

    <SocialIcons />
    

</template>
<style scoped>
/* Background cover styling */
.zindex {
    z-index: 0;
}
.bottom-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
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