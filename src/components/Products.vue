<script setup lang="ts">
import { computed } from 'vue';
import { locale, translations } from '@/composables/useLocale';
import { Marquee } from '@selemondev/vue3-marquee';
import '@selemondev/vue3-marquee/dist/style.css';
import {
  Crown,
  Vegan,
  Ghost,
  Puzzle,
  Squirrel,
  Cookie,
  Drama,
} from 'lucide-vue-next';

interface SponsorProps {
  icon: string;
  name: string;
}

// Static sponsors list (names are brands, unchanged across locales)
const sponsors: SponsorProps[] = [
  { icon: 'crown', name: 'DentX' },
  { icon: 'crown', name: 'ZEEP' },
  { icon: 'crown', name: 'GGNetworks' },
];

const iconMap: Record<string, any> = {
  crown: Crown,
  vegan: Vegan,
  ghost: Ghost,
  puzzle: Puzzle,
  squirrel: Squirrel,
  cookie: Cookie,
  drama: Drama,
};

// Localized heading
const heading = computed(() => translations[locale.value].products.heading);
</script>

<template>
  <section id="products" class="max-w-[50%] mx-auto pb-24 sm:pb-32">
    <h2 class="text-lg md:text-xl text-center mb-6">{{ heading }}</h2>

    <div class="mx-auto">
      <Marquee class="gap-[3rem]" :pauseOnHover="true" :fade="true" innerClassName="gap-[3rem]">
        <div v-for="({ icon, name }) in sponsors" :key="name">
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <component :is="iconMap[icon]" class="mr-2" stroke-width="3" />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
