<template>
    <div class="fixed-icons d-flex flex-row flex-sm-column">

        <a
            href="https://www.instagram.com/tomasvodanovic/"
            target="_blank"
            class="p-3 p-sm-0 mx-sm-3 mb-sm-2 mx-0 mb-0 text-white socialIcon animate__animated animate__fadeInRight"
            style="animation-delay: 0s;"
            aria-label="Visit Tomas Vodanovic's Instagram profile"
        >
            <img src="assets/img/IG.png" alt="Instagram icon" />
        </a>
        
        <a
            href="https://web.facebook.com/TomasVodanovicAlcaldeMaipu/"
            target="_blank"
            class="p-3 p-sm-0 mx-sm-3 mb-sm-2 mx-0 mb-0 text-white socialIcon animate__animated animate__fadeInRight"
            style="animation-delay: 0.5s;"
            aria-label="Visit Tomas Vodanovic's Facebook page"
        >
            <img src="assets/img/FB.png" alt="Facebook icon" />
        </a>
        
        <a
            href="https://x.com/TomasVodanovic"
            target="_blank"
            class="p-3 p-sm-0 mx-sm-3 mb-sm-2 mx-0 mb-0 text-white socialIcon animate__animated animate__fadeInRight"
            style="animation-delay: 1s;"
            aria-label="Visit Tomas Vodanovic's Twitter profile"
        >
            <img src="assets/img/TW.png" alt="Twitter icon" />
        </a>
    </div>
</template>


<style scoped>
/* Background cover styling */

.fixed-icons {
    position: absolute;
    z-index: 4;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
}

/* Media query for mobile screens */
@media (max-width: 576px) { /* Adjust the breakpoint as needed */
    .fixed-icons {
        top: 0;
        transform: translate(0, 0);
    }
}

.socialIcon img {
  width: 100%;
}

/* Mobile-specific styles */
@media (max-width: 576px) {
  .socialIcon img {
    width: 3rem;
  }
  .socialIcon{
    padding: 1rem !important;
  }
}
</style>
