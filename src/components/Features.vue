<script setup lang="ts">
import { computed } from 'vue';
import { locale, translations } from '@/composables/useLocale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TabletSmartphone,
  Paintbrush,
  Goal,
  BadgeCheck,
  Newspaper,
  MessageCircle,
} from 'lucide-vue-next';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const iconMap: Record<string, any> = {
  tabletSmartphone: TabletSmartphone,
  paintbrush: Paintbrush,
  goal: Goal,
  badgeCheck: BadgeCheck,
  newspaper: Newspaper,
  messageCircle: MessageCircle,
};

const smallHeading = computed(() => translations[locale.value].features.smallHeading);
const largeHeading = computed(() => translations[locale.value].features.largeHeading);
const subheading = computed(() => translations[locale.value].features.subheading);
const featureList = computed<FeatureProps[]>(
  () => [...translations[locale.value].features.list]
);
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <h2 class="text-lg text-blue-600 text-center mb-2 tracking-wider">
      {{ smallHeading }}
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      {{ largeHeading }}
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      {{ subheading }}
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="({ icon, title, description }) in featureList" :key="title">
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex flex-col items-center">
            <div class="bg-blue-600/20 p-2 rounded-full ring-8 ring-blue-600/10 mb-4">
              <component :is="iconMap[icon]" class="size-6 text-blue-600" />
            </div>
            <CardTitle class="text-center">{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
