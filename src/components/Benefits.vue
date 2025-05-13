<script setup lang="ts">
import { computed } from 'vue';
import { locale, translations } from '@/composables/useLocale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkle, Paintbrush, Blocks, LineChart, Cloud } from 'lucide-vue-next';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const iconMap: Record<string, any> = {
  sparkle: Sparkle,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  cloud: Cloud,
};

const smallHeading = computed(() => translations[locale.value].benefits.smallHeading);
const largeHeading = computed(() => translations[locale.value].benefits.largeHeading);
const introText = computed(() => translations[locale.value].benefits.intro);
const serviceList = computed<ServiceProps[]>(
  () => [...translations[locale.value].benefits.services]
);
</script>

<template>
  <section id="services" class="container py-24 sm:py-32">
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <!-- Intro -->
      <div>
        <h2 class="text-lg text-blue-600 mb-2 tracking-wider">{{ smallHeading }}</h2>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ largeHeading }}</h2>
        <p class="text-xl text-muted-foreground mb-8">{{ introText }}</p>
      </div>

      <!-- Service Cards -->
      <div class="grid lg:grid-cols-2 gap-6 w-full">
        <Card
          v-for="({ icon, title, description }, idx) in serviceList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all"
        >
          <CardHeader>
            <div class="flex justify-between items-center">
              <component :is="iconMap[icon]" class="size-8 text-blue-600" />
              <span class="text-5xl text-muted-foreground/20 font-medium">
                0{{ idx + 1 }}
              </span>
            </div>
            <CardTitle class="mt-2">{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
