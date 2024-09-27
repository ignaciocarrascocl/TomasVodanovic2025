<template>
  <div 
    class="fixed-mobile-size"
    :class="{ secondImage: currentImageIndex !== 0 }"
  >
    <!-- Single image container with dynamic src and class binding -->
    <img
      :src="images[currentImageIndex]"
      alt="Collage de fotos de actividades de Tomás Vodanovic"
      class="img-fluid animate__animated"
      :class="currentAnimation"
    />
  </div>
</template>

<style>
.secondImage {
  padding-bottom: 20vh;
}
@media (max-width: 576px) { /* Adjust the breakpoint as needed */
  .secondImage {
    padding-bottom: 50%;
  }
  .fixed-mobile-size img {
    height: auto;
  }
}
.fixed-mobile-size {
  height: 85vh;
  display: flex;
  flex-wrap: wrap;
  align-items: end;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';

// Import images directly
import tomas from '@/assets/img/portada/tomas.webp';
import foto1 from '@/assets/img/portada/foto1.webp';
import foto2 from '@/assets/img/portada/foto2.webp';
import foto3 from '@/assets/img/portada/foto3.webp';
import foto4 from '@/assets/img/portada/foto4.webp';
import foto5 from '@/assets/img/portada/foto5.webp';

// List of images to cycle through
const images = [tomas, foto1, foto2, foto3, foto4, foto5];

const currentImageIndex = ref(0);
const currentAnimation = ref('animate__fadeInLeft');

const cycleImages = () => {
  setInterval(() => {
    currentAnimation.value = 'animate__fadeOutLeft';

    setTimeout(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
      currentAnimation.value = 'animate__fadeInLeft';
    }, 1000);
  }, 4000);
};

onMounted(() => {
  cycleImages();
});
</script>
