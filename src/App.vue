<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Products from "./components/Products.vue";
import Benefits from "./components/Benefits.vue";
import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

// Lottie animation component
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const mode = useColorMode();

// Your two Lottie URLs
const darkSrc  = 'https://lottie.host/bc532f77-c6e9-45ea-a9aa-ed8a1a0ee92c/NZOa3J7E1V.lottie';
const lightSrc = 'https://lottie.host/b9c57522-95c1-4e20-aeb8-6c58f897a0f7/8SrqsysShg.lottie  ';

// Compute which one to use
const lottieSrc = computed(() =>
  mode.value === 'dark' ? darkSrc : lightSrc
);
</script>

<template>
  <div class="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
    <DotLottieVue
      :key="lottieSrc"
      :src="lottieSrc"
      :autoplay="true"
      :loop="true"
      :segment="[0,149]"
      renderer="svg"
      preserve-aspect-ratio="xMidYMid meet"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style="
        /*keep aspect ratio */
        min-width: 2000px;
        width: auto;
        height: auto;
      "
    />
  </div>

  <!-- 2) Semi-transparent gradient overlay -->
  <div
    class="fixed inset-0 pointer-events-none -z-10"
    :class="
      mode === 'dark'
        ? 'bg-gradient-to-br from-black/60 via-gray-900/60 to-blue-900/60'
        : 'bg-gradient-to-br from-white/60 via-gray-100/60 to-blue-200/60'
    "
    aria-hidden="true"
  />

  <!-- 3) Main content on top -->
  <div class="relative z-0">
    <Navbar />
    <Hero />
    <Products />
    <Benefits />
    <Features />
    <Services />
    <Contact />
    <Footer />
  </div>
</template>
