<style>
  .btn-program {
    background-color: #E64549;
    color: white;
    border: none;
  }

  .btn-volunteer {
    background-color: #36A3DC;
    color: white;
    border: none;
  }

  .btn-aporte {
    background-color:#009E57 ;
    color: white;
  }

  .btn-program:hover, .btn-volunteer:hover, .btn-aporte:hover{
    background-color: white;
    color: #223B82;
  }

  .btn-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    align-items: flex-start;
  }

  .btn-text {
    display: inline-block;
    text-align: left;
    line-height: 1.2;
  }
</style>
<template>
  <div class="d-flex gap-3 p-4 justify-content-center">
    <!-- Button with document icon -->
     <a href="/Tomas-Vodanovic.pdf">
    <button
      class="btn btn-program px-4 py-2 animate__animated animate__flipInX animate__delay-1s"
    >
      <div class="btn-content">
        <span class="btn-text">DESCARGA ELPROGRAMA</span>
        <i class="bi bi-file-earmark-text ms-2"></i> <!-- Document icon -->
      </div>
    </button></a>

    <!-- Button with WhatsApp icon -->

  <a href="https://chat.whatsapp.com/Eh1YTlXNGmT35v4v4iNhdz">
    <button
      class="btn btn-volunteer px-4 py-2 animate__animated animate__flipInX animate__delay-1s"
    >
      <div class="btn-content">
        <span class="btn-text">INSCRÍBETE COMO VOLUNTARIO</span>
        <i class="bi bi-whatsapp ms-2"></i> <!-- WhatsApp icon -->
      </div>
    </button>
  </a>
  </div>
  <div class="ps-4 pe-4">
    <a href="https://www.servel.cl/aportes/">
    <button
      class="btn btn-aporte w-100 px-4 py-2 animate__animated animate__flipInX animate__delay-1s"
    >
      <div class="btn-content">
        <span class="btn-text">HAZ TU APORTE</span>
        <i class="bi bi-coin ms-2"></i> <!-- WhatsApp icon -->
      </div>
    </button>
  </a>

  </div>
</template>


