<!-- src/components/Hero.vue -->
<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { locale } from '@/composables/useLocale';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';

// load the widget script
onMounted(() => {
  const s = document.createElement('script');
  s.src = 'https://elevenlabs.io/convai-widget/index.js';
  s.async = true;
  document.head.appendChild(s);
});

const translations = {
  en: {
    part1: 'Accelerate Your Business with',
    highlight: 'Innovative IT Solutions',
    desc:
      'Global Optima Technologies (GOTech) delivers custom software development, cloud services, and IT consulting to drive your business growth.',
    ctaQuote: 'Get a Quote',
    ctaServices: 'Our Services',
  },
  ru: {
    part1: 'Ускорьте развитие вашего бизнеса с помощью',
    highlight: 'инновационных IT-решений',
    desc:
      'Global Optima Technologies (GOTech) предоставляет услуги по разработке ПО на заказ, облачные сервисы и IT-консалтинг для роста вашего бизнеса.',
    ctaQuote: 'Получить предложение',
    ctaServices: 'Наши услуги',
  },
  kk: {
    part1: 'Бизнесті жеделдетіңіз',
    highlight: 'инновациялық IT шешімдермен',
    desc:
      'Global Optima Technologies (GOTech) сіздің бизнесіңіздің өсуі үшін тапсырыспен бағдарлама әзірлеу, бұлттық қызметтер және IT-консалтинг ұсынады.',
    ctaQuote: 'Баға алу',
    ctaServices: 'Қызметтеріміз',
  },
};

const part1 = computed(() => translations[locale.value].part1);
const highlight = computed(() => translations[locale.value].highlight);
const desc = computed(() => translations[locale.value].desc);
const ctaQuote = computed(() => translations[locale.value].ctaQuote);
const ctaServices = computed(() => translations[locale.value].ctaServices);
</script>

<template>
  <section class="container">
    <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
      <div class="text-center space-y-8">
        <div class="max-w-screen-md mx-auto text-5xl md:text-6xl font-bold">
          <h1>
            {{ part1 }}
            <span class="text-transparent bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text">
              {{ highlight }}
            </span>
          </h1>
        </div>
        <p class="max-w-screen-sm mx-auto text-xl text-gray-600">
          {{ desc }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button class="w-5/6 sm:w-auto font-bold px-6 py-3 group/arrow bg-blue-600 hover:bg-blue-400">
            {{ ctaQuote }}
            <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </Button>

          <Button as-child variant="secondary" class="w-5/6 sm:w-auto font-bold px-6 py-3">
            <a href="#services" target="_blank">{{ ctaServices }}</a>
          </Button>
        </div>

        <div class="mt-8">
          <elevenlabs-convai agent-id="C5qQdrOXxzhgtoBLFFv0" />
        </div>
      </div>
    </div>
  </section>
</template>
