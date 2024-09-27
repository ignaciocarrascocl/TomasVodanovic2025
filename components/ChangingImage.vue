<template>
    <div class="fixed-mobile-size">
      <!-- Image container with v-if to toggle between images -->
      <img
        v-if="currentImageIndex === 0"
        src="assets/img/tomas.png"
        alt=""
        class="img-fluid animate__animated"
        :class="currentAnimation"
      />
      <img
        v-if="currentImageIndex === 1"
        src="assets/img/tomas2.png"
        alt=""
        class="img-fluid animate__animated secondImage"
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
.fixed-mobile-size{
    height: 85vh;
    display: flex;
    flex-wrap: wrap;
    align-items: end;
}
}

</style>
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const currentImageIndex = ref(0);
  const currentAnimation = ref('animate__fadeInLeft'); // Start with fadeInLeft
  const images = ['tomas.png', 'tomas2.png']; // List of images
  
  // Function to handle the cycling of images and animations
  const cycleImages = () => {
    setInterval(() => {
      // First, apply fadeInLeft
      currentAnimation.value = 'animate__fadeInLeft';
  
      // Wait for the fade-in duration + display duration
      setTimeout(() => {
        // Apply fadeOutLeft after image is shown
        currentAnimation.value = 'animate__fadeOutLeft';
      }, 2000); // Change 2000 to the time (ms) the image should stay before fading out
  
      // After fadeOutLeft, change the image
      setTimeout(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
        currentAnimation.value = 'animate__fadeInLeft'; // Reset animation to fadeInLeft
      }, 3000); // 3000 should be fade-in + display + fade-out duration
    }, 4000); // Interval for the next cycle (should be more than total animation + delay)
  };
  
  // Start cycling images on mount
  onMounted(() => {
    cycleImages();
  });
  </script>
  