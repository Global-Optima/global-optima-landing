<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
const mode = useColorMode()
</script>

<template>
  <!-- Static gradient background reacting to dark/light -->
  <div
    class="fixed inset-0 pointer-events-none z-0"
    :class="mode === 'dark'
      ? 'bg-gradient-to-br from-black via-gray-900 to-blue-900'
      : 'bg-gradient-to-br from-white via-gray-100 to-blue-200'"
    aria-hidden="true"
  />

  <div class="relative z-10">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>