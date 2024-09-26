<style>
  .btn-program {
    background-color: #E64549;
    color: white;
    border: none;
    transition: background-color 0.3s, color 0.3s;
  }

  .btn-volunteer {
    background-color: #36A3DC;
    color: white;
    border: none;
    transition: background-color 0.3s, color 0.3s;
  }

  .btn-program:hover, .btn-volunteer:hover {
    background-color: white;
    color: #223B82;
  }

  .btn-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    align-items: flex-start;
  }

  .btn-text {
    display: inline-block;
    text-align: left;
    line-height: 1.2;
  }
</style>
<template>
<div class="d-flex gap-3 p-4 justify-content-center ">
  <button class="btn btn-program px-4 py-2">
    <div class="btn-content">
      <span class="btn-text">DESCARGA EL<br>PROGRAMA</span>
      <i class="bi bi-chevron-right ms-2"></i>
    </div>
  </button>
  <button class="btn btn-volunteer px-4 py-2">
    <div class="btn-content">
      <span class="btn-text">INSCRÍBETE<br> COMO<br>VOLUNTARIO</span>
      <i class="bi bi-chevron-right ms-2"></i>
    </div>
  </button>
</div>
</template>

